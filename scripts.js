function getAllCiatekMembersUserName(members) {
  // initializing members array
  let members_of_Ciatek_UserName = [];

  let members_array = [];

  // looping the members by ids
  for (let ids in members) {
    let membersIds = members[ids];
    // looping member ids by member
    for (let member in membersIds) {
      // assigning this object to the keys of member
      let existing_members = {
        ...member
      };
      // assigning the members to be equal to that of member Ids
      existing_members[member] = membersIds[member];
      // push the members username to new array
      members_array.push(existing_members.username);
      // filter 1 for removing keys---- filter 2 for removing undefined
      let membersFilter = members_array
        .filter(nick => nick !== member)
        .filter(nick => nick != undefined);

      members_of_Ciatek_UserName = membersFilter;
    }
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(members_of_Ciatek_UserName);
    }, 1000);
  });
}

function getAllCiatekChannels(ciatek_server) {
  let channels_of_ciatek = [];

  for (ids in ciatek_server.channels) {
    let channels = ciatek_server.channels[ids];
    for (channel in channels) {
      let index = channels_of_ciatek.indexOf(channels);
      if (index < 0) {
        channels_of_ciatek.push(channels);
      }
    }
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(channels_of_ciatek);
    }, 1000);
  });
}

function getNewMember(members, new_members_id) {
  let new_member = {};

  let newMembersObject = members[new_members_id];
  // looping members by new member id
  for (let member in newMembersObject) {
    // assigning this object to the keys of member
    let existing_members = {
      ...member
    };
    existing_members[member] = newMembersObject[member];

    new_member[member] = existing_members[member];
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(new_member);
    }, 2000);
  });
}

module.exports = {
  getAllCiatekMembersUserName,
  getAllCiatekChannels,
  getNewMember
};
