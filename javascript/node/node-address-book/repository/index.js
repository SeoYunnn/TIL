import {MongoClient} from "mongodb";
import {ObjectId} from "mongodb";

/*
example
{
  "userName" : "Seoyun",
  "address" : "Daejeon-si, Daedeok-gu, Jungri-dong",
  "phoneNumber" : "010-0000-0000",
  "email" : "Seoyun@wisoft.io"

 }
 */

async function getConnection() {
  const databaseUrl = "mongodb://localhost:27017/admin";
  const client = await MongoClient.connect(databaseUrl);
  const database = client.db("addressbook");
  return database.collection("address");
}


// add
export async function addInfo(Info) {
  const addressbook = await getConnection();
  return await addressbook.insertOne(Info);
}

// read ( all, username, email, address )
export async function readAllInfo(user) {
  const addressbook = await getConnection();
  return await addressbook.find(user).toArray();
}

export async function readById(userId) {
  const addressbook = await getConnection();
  console.log(userId);
  const objectId = new ObjectId(userId);
  return await addressbook.findOne({"_id": objectId});
}

// update
export async function updateUserById(_id, user) {
  const addressbook = await getConnection();
  return await addressbook.updateOne(
    {"_id": _id},
    {
      $set: {
        "userName": user.userName,
        "address": user.address,
        "phoneNumber": user.phoneNumber,
        "email": user.email,
      },
    },
  );
}

// delete
export async function deleteById(userId) {
  const connection = await getConnection();
  const objectId = new ObjectId(userId);
  return await connection.deleteOne({"_id": objectId});
}