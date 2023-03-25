import {MongoClient} from "mongodb";

export default async function connect() {
  const databaseUrl = "mongodb://localhost:27017/";
  const client = await MongoClient.connect(databaseUrl);
  const database = client.db("sns");
  return database.collection("user");
}