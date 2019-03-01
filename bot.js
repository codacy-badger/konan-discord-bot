const Discord = require('discord.io');
const logger = require('winston');
const auth = require('./auth.json');
const Scripts = require('./scripts');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console(), {
  colorize: true,
});
logger.level = 'debug';

// Initialize Discord Bot
const bot = new Discord.Client({
  token: auth.token,
  autorun: true,
});

const ciatek = {};
let members_of_Ciatek_UserName = [];
let channels_of_ciatek = [];

bot.on('ready', (evt) => {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(`${bot.username} - (${bot.id})`);

  const { members } = bot.servers['497486687681773579'];
  const ciatek_server = bot.servers['497486687681773579'];

  Scripts.getAllCiatekMembersUserName(members).then(
    membersofCiatekUserName => (members_of_Ciatek_UserName = membersofCiatekUserName),
  );

  Scripts.getAllCiatekChannels(ciatek_server).then(
    channelsOfCiatek => (channels_of_ciatek = channelsOfCiatek),
  );
});
bot.on('message', async (user, userID, channelID, message, evt) => {
  // Our bot needs to know if it will execute a command
  // > It will listen for messages that will start with `!`

  if (message.substring(0, 1) == '!') {
    let args = message.substring(1).split(' ');
    console.log(args);
    const cmd = args[0];

    args = args.splice(1);
    switch (cmd) {
      // !ping
      case 'ping':
        bot.sendMessage({
          to: channelID,
          message: 'Pong!',
        });
        break;

      case 'members':
        bot.sendMessage({
          to: channelID,
          message: `Members of Ciatek are: ${members_of_Ciatek_UserName.map(
            member => `# ${member}`,
          )}`,
        });
        break;

      case 'channels':
        bot.sendMessage({
          to: channelID,
          message: `Channels of Ciatek are: ${channels_of_ciatek.map(
            channel => `# ${channel.name}`,
          )}`,
        });
        break;

      case 'server_name':
        bot.sendMessage({
          to: channelID,
          message: `Name of the Server is ${ciatek.name}`,
        });
        bot.uploadFile({
          to: channelID,
          file: './assets/images/cia.png',
        });
        break;

      case 'ciatek':
        bot.sendMessage({
          to: channelID,
          message: ` 
                    Welcome to Ciatek
                    `,
        });
        bot.uploadFile({
          to: channelID,
          file: './assets/images/cia.png',
        });
        break;

      case 'help':
        bot.sendMessage({
          to: channelID,
          message: `🚀 Commands you can use are:
                        !ping
                        !members
                        !server_name
                        !resources
                        !channels
                        !ciatek
                    `,
        });
        break;

      case 'resources':
        bot.sendMessage({
          to: channelID,
          message: `    
                        # Resources Are:   
                    (How to set up file upload with React and Node)[https://medium.freecodecamp.org/how-to-create-file-upload-with-react-and-node-2aa3f9aab3f0]    
                    (Node Js in 3 min)[https://medium.com/@kieranmaher13/nodejs-in-three-ish-minutes-4c4401b43b2c]    
                    (Understanding Higher-Order Functions in JavaScript)[https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad]    
                    (How to write MarkDown)[https://www.markdownguide.org/basic-syntax/#overview]    
                    (How To Write Better Code in React)[https://blog.bitsrc.io/how-to-write-better-code-in-react-best-practices-b8ca87d462b0]    
                `,
        });
        break;
    }
  }

  // > Without "!"

  switch (message) {
    case 'haha':
      bot.sendMessage({
        to: channelID,
        message: 'hahahahahhahaha',
      });
      break;

    case 'bye':
      bot.sendMessage({
        to: channelID,
        message: 'See you soon :crying_cat_face:',
      });
      break;

    case 'hi':
      bot.sendMessage({
        to: channelID,
        message: `Hi ${user}`,
      });
      break;

    case 'hello':
      bot.sendMessage({
        to: channelID,
        message: `Hello ${user}`,
      });
      break;

    case 'Good Morning':
      bot.sendMessage({
        to: channelID,
        message: `Good Morning ${user}`,
      });
      break;

    case 'good morning':
      bot.sendMessage({
        to: channelID,
        message: `Good Morning ${user}`,
      });
      break;

    case 'How are you?':
      bot.sendMessage({
        to: channelID,
        message: `I m Good How are you ${user} ?`,
      });
      break;

    case 'How are you today?':
      bot.sendMessage({
        to: channelID,
        message: `I m Good How are you ${user}?`,
      });
      break;

    case 'I m fine':
      bot.sendMessage({
        to: channelID,
        message: `Good to hear that ${user}`,
      });
      break;

    case 'I m good':
      bot.sendMessage({
        to: channelID,
        message: `Good to hear that ${user} `,
      });
      break;
  }
});

bot.on('guildMemberAdd', (member) => {
  const { members } = bot.servers['497486687681773579'];
  const { channels } = bot.servers['497486687681773579'];

  Scripts.getNewMember(members, member.id).then((newMember) => {
    const mentionNewMember = '<@!' + newMember.id + '>';
    const welcome_channel = '<#' + channels['497490728709259265'].id + '>';

    bot.sendMessage({
      to: '497491158063251497',
      message: `Hi ${mentionNewMember} and Welcome To Ciatek Server 🙌. We are Excited to See you Here Among Us 🤩. Please Read 👀 the ${welcome_channel} Channel to see how to Use Discord Better. Also Feel Free to Surf 🏂 around the channels you Have Permission to See and Chat. Thank You For Joining Us. 🎉 🎂 🎈`,
    });

    bot.uploadFile({
      to: '497491158063251497',
      file: './assets/images/cia.png',
    });
  });
});
