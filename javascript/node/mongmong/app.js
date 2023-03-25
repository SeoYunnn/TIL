import {MongoClient} from "mongodb";
import express from "express";

const app = express();

app.set("port", 13000);

app.use(express.json());

// 1. get connection
async function getConnection() {
  const databaseUrl = "mongodb://localhost:27017/nodejs2";
  const client = await MongoClient.connect(databaseUrl);
  const database = client.db("nodejs2");
  return database.collection("users");
}

// 2. Create
async function registerUser(user) {
  let connection = await getConnection();
  await connection.insertOne(user);
}

// 3. Read
async function findUserByUsername(username) {
  let connection = await getConnection();
  return connection.find({username: username}).toArray();
}

// 4. Update
async function updateByUserName(userName, newEmail) {
  let connection = await getConnection();
  return await connection.updateOne(userName, {$set: newEmail});
}

// 5. Delete
async function deleteUserByUserName(userName) {
  let connection = await getConnection();
  await connection.deleteOne(userName);
}

app.post("/api/users", async (req, res) => {
  console.log(`body: ${JSON.stringify(req.body)}`);
  await registerUser(req.body);
  res.send(`${req.body.username}님이 추가되었습니다.`);
});

app.get("/api/users/:username", async (req, res) => {
  console.log(`${req.params.username}`);
  let user = await findUserByUsername(req.params.username);
  console.log(`result: ${JSON.stringify(user)}}`);
  res.send(user);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "port stand by");
});