type ConnectedUserData = {
  socketsId: string;
  userType: "hello" | "world";
  userEmail: string;
};

const connectedUsers = new Map<string, ConnectedUserData>();

connectedUsers.set("wow", {
  socketsId: "hell",
  userEmail: "wow@abc.om",
  userType: "hello",
});

for (const user of connectedUsers) {
  console.log("user isjlfajlfa,", user[0], user[1]);
}
