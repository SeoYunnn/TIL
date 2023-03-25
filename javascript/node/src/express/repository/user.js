import connect from "./connect.js";

const newUser = {
  email: "naver@naver.com",
  nickName: "naver",
  password: "naver",
  provider: "naver",
  snsId: "naverId"
};

// CRUD
// registerUser
export async function registerUser() {
  const connection = await connect();
  connection.insertOne(newUser);
}
// delete
export async function deleteUserByNickNameAndPassword(nickName,password) {
  const connection = await connect()
  connection.deleteOne({"nickName":nickName,"password":password});
}
// update
export async function updateUser(nickname,email){
  const connection = await connect()
  connection.updateOne(nickname,{ $set:email })
}

// read
export async function findUserByUserName(nickname,email){
  const connection = await connect()
  connection.find(nickname).toArray()
}