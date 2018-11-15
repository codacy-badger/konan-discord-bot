var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

let members_of_Ciatek = []


// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');

    // get all member of Ciatek Server
    let members = bot.servers['497486687681773579'].members
    // initializing members array
    let members_array = []
    // looping the members by ids
    for(let ids in members){
        let membersIds = members[ids]
        // looping member ids by member
        for(let member in membersIds){
            // assigning this object to the keys of member
            let existing_members = {
                ...member
            }
            // assigning the members to be equal to that of member Ids
            existing_members[member] = membersIds[member]
            // push the members username to new array
            members_array.push(existing_members.username)
            // filter 1 for removing keys---- filter 2 for removing undefined
            let membersFilter = members_array.filter( (nick) => nick !== member).filter( (nick) => nick != undefined)
            // console.log(membersFilter)
            members_of_Ciatek = membersFilter
        }
    }
});
bot.on('message', async function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        console.log(args)
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: `Pong! Latency is ${message.createdTimestamp}ms. API Latency is ${Math.round(parseInt(bot.ping))}ms`
                });
            break;
           
            case 'members':
                bot.sendMessage({
                    to: channelID,
                    message: `Members of Ciatek are: ${members_of_Ciatek.map( (member) => `# ${member}`)}`
                });
            break;
            
        //     case 'purge':
        //      // This command removes all messages from all users in the channel, up to 100.
        
        // // get the delete count, as an actual number.
        // const deleteCount = parseInt(args[0], 10);
        
        // // Ooooh nice, combined conditions. <3
        // // console.log("test", deleteCount, args)
        //         if(!deleteCount || deleteCount < 2 || deleteCount > 100)
        //         return bot.sendMessage({
        //             to: channelID,
        //             message: "Please provide a number between 2 and 100 for the number of messages to delete" 
        //             })
                    
        //             // So we get our messages, and delete them. Simple enough, right?
        //             const fetched = await message.channel.fetchMessages({limit: deleteCount});
        //             message.channel.bulkDelete(fetched)
        //         .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
        //     break;
            
            // Just add any case commands if you want to..
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
                `
            });
            break;
         }
     }

        switch(message){
        case 'haha':
        bot.sendMessage({
            to: channelID,
            message: 'hahahahahhahaha'
        });
        break;

        case 'bye':
        bot.sendMessage({
            to: channelID,
            message: 'See you soon :crying_cat_face:'
        });
        break;

        case 'hi':
        bot.sendMessage({
            to: channelID,
            message: `Hi ${user}`
        });
        break;
        
        case 'hello':
        bot.sendMessage({
            to: channelID,
            message: `Hello ${user}`
        });
        break;
        
        case 'Good Morning':
        bot.sendMessage({
            to: channelID,
            message: `Good Morning ${user}`
        });
        break;
        
        case 'good morning':
        bot.sendMessage({
            to: channelID,
            message: `Good Morning ${user}`
        });
        break;
        
        case 'How are you?':
        bot.sendMessage({
            to: channelID,
            message: `I m Good How are you ${user} ?`
        });
        break;
        
        case 'How are you today?':
        bot.sendMessage({
            to: channelID,
            message: `I m Good How are you ${user}?`
        });
        break;
        
        case 'I m fine':
        bot.sendMessage({
            to: channelID,
            message: `Good to hear that ${user}`
        });
        break;
        
        case 'I m good':
        bot.sendMessage({
            to: channelID,
            message: `Good to hear that ${user} `
        });
        break;
            
     }

    //  if(message == "!purge") {
    //     // This command removes all messages from all users in the channel, up to 100.
        
    //     // get the delete count, as an actual number.
    //     const deleteCount = parseInt(args[1], 10);
        
    //     // Ooooh nice, combined conditions. <3
    //     console.log("test", deleteCount)
    //     if(!deleteCount || deleteCount < 2 || deleteCount > 100)
    //       return message.sendMessage({
    //         to: channelID,
    //         message: "Please provide a number between 2 and 100 for the number of messages to delete" 
    //     })
        
    //     // So we get our messages, and delete them. Simple enough, right?
    //     const fetched = await message.channel.fetchMessages({limit: deleteCount});
    //     message.channel.bulkDelete(fetched)
    //       .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    //   }
});