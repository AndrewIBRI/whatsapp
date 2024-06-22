let user = {
  id: 0,
  name: "Andrew",
  number: "Conteudo Bloqueado🔒",
  pic: "images/asdsd12f34ASd231.png",
};

let contactList = [
  {
    id: 0,
    name: "Andrew",
    number: "Conteudo Bloqueado🔒",
    pic: "images/asdsd12f34ASd231.png",
    lastSeen: "Apr 29 2018 17:58:02",
  },
  {
    id: 1,
    name: "Ana",
    number: "Conteudo Bloqueado🔒",
    pic: "images/Ass09123asdj9dk0qw.jpg",
    lastSeen: "Apr 28 2018 22:18:21",
  },
  {
    id: 2,
    name: "Love ❤️",
    number: "Conteudo Bloqueado🔒",
    pic: "images/asd1232ASdas123a.png",
    lastSeen: "Apr 28 2018 19:23:16",
  },
  {
    id: 3,
    name: "Ricardo",
    number: "Conteudo Bloqueado🔒",
    pic: "images/Alsdk120asdj913jk.jpg",
    lastSeen: "Apr 29 2018 11:16:42",
  },
  {
    id: 4,
    name: "Dee",
    number: "Conteudo Bloqueado🔒",
    pic: "images/dsaad212312aGEA12ew.png",
    lastSeen: "Apr 27 2018 17:28:10",
  },
];

let groupList = [
  {
    id: 1,
    name: "Sacanagens❤️‍🔥🔥🔥",
    members: [0, 1, 3],
    pic: "images/0923102932_aPRkoW.jpg",
  },
  {
    id: 2,
    name: "Grupo Secreto",
    members: [0, 2],
    pic: "images/1921231232_Ag1asE.png",
  },
  {
    id: 3,
    name: "Senhas",
    members: [0],
    pic: "images/8230192232_asdEWq2.png",
  },
];

// message status - 0:sent, 1:delivered, 2:read

let messages = [
  {
    id: 0,
    sender: 2,
    body: "Conteudo Bloqueado🔒",
    time: "June 21, 2024 17:41:55",
    status: 2,
    recvId: 0,
    recvIsGroup: false,
  },
  {
    id: 1,
    sender: 0,
    body: "Conteudo Bloqueado🔒",
    time: "June 21, 2024 17:41:55",
    status: 2,
    recvId: 2,
    recvIsGroup: false,
  },
  {
    id: 2,
    sender: 0,
    body: "Conteudo Bloqueado🔒",
    time: "June 21, 2024 17:41:55",
    status: 2,
    recvId: 3,
    recvIsGroup: false,
  },
  {
    id: 3,
    sender: 3,
    body: "Conteudo Bloqueado🔒",
    time: "June 21, 2024 17:41:55",
    status: 2,
    recvId: 0,
    recvIsGroup: false,
  },
  {
    id: 4,
    sender: 0,
    body: "Conteudo Bloqueado🔒",
    time: "June 21, 2024 17:41:55",
    status: 1,
    recvId: 3,
    recvIsGroup: false,
  },
  {
    id: 5,
    sender: 3,
    body: "Conteudo Bloqueado🔒",
    time: "June 21, 2024 17:41:55",
    status: 0,
    recvId: 1,
    recvIsGroup: true,
  },
  {
    id: 6,
    sender: 1,
    body: "Conteudo Bloqueado🔒",
    time: "June 21, 2024 17:41:55",
    status: 1,
    recvId: 0,
    recvIsGroup: false,
  },
  {
    id: 7,
    sender: 0,
    body: "Conteudo Bloqueado🔒",
    time: "June 21, 2024 17:41:55",
    status: 2,
    recvId: 2,
    recvIsGroup: false,
  },
  {
    id: 8,
    sender: 2,
    body: "Conteudo Bloqueado🔒",
    time: "June 21, 2024 17:41:55",
    status: 2,
    recvId: 0,
    recvIsGroup: false,
  },
  {
    id: 9,
    sender: 0,
    body: "Conteudo Bloqueado🔒",
    time: "June 21, 2024 17:41:55",
    status: 1,
    recvId: 2,
    recvIsGroup: false,
  },
  {
    id: 10,
    sender: 0,
    body: "Conteudo Bloqueado🔒",
    time: "June 21, 2024 17:41:55",
    status: 2,
    recvId: 4,
    recvIsGroup: false,
  },
  {
    id: 11,
    sender: 1,
    body: "Conteudo Bloqueado🔒",
    time: "June 21, 2024 17:41:55",
    status: 0,
    recvId: 1,
    recvIsGroup: true,
  },
];

let MessageUtils = {
  getByGroupId: (groupId) => {
    return messages.filter((msg) => msg.recvIsGroup && msg.recvId === groupId);
  },
  getByContactId: (contactId) => {
    return messages.filter((msg) => {
      return (
        !msg.recvIsGroup &&
        ((msg.sender === user.id && msg.recvId === contactId) ||
          (msg.sender === contactId && msg.recvId === user.id))
      );
    });
  },
  getMessages: () => {
    return messages;
  },
  changeStatusById: (options) => {
    messages = messages.map((msg) => {
      if (options.isGroup) {
        if (msg.recvIsGroup && msg.recvId === options.id) msg.status = 2;
      } else {
        if (
          !msg.recvIsGroup &&
          msg.sender === options.id &&
          msg.recvId === user.id
        )
          msg.status = 2;
      }
      return msg;
    });
  },
  addMessage: (msg) => {
    msg.id = messages.length + 1;
    messages.push(msg);
  },
};
