import express from "express";

const app = express();
const router = express.Router();

app.set("port", process.env.PORT || 13000);

app.use(express.json());

// localhost:13000/api/greet

app.get("/api/greet", (req, res) => {
  if (!req.query.name) {
    res.send("Hello, Greet!");
  } else {
    res.send(`Hello, ${req.query.name}!`);
  }
});

const users = [];

// users.push(geunwon);
// users.push(dongmin);

console.log(users);

app.post("/api/users", (req, res) => {
  console.log(`body: ${JSON.stringify(req.body)}`);
  users.push(req.body);

  console.log(req.body);
  res.send(`${req.body.name}님이 추가되었습니다. `);
});


app.get("/api/users/:id", (req, res) => {
  console.log(`${req.params.id}`);
  let result = {};
  for (const user of users) {
    console.log(`user: ${JSON.stringify(user)}`);
    if (user.id == req.params.id) {
      result = user;
    }
  }
  console.log(`result: ${JSON.stringify(result)}`);
  res.send(result);
});

app.patch("/api/users/:id", (req, res) => {
  let result = {};
  for (const user of users) {
    if (user.id == req.params.id) {
      user.level = req.body.level;
      result = user;
    }
  }
  res.send(result);
});

app.delete("/api/users/:id", (req, res) => {
  let result = {};
  //result = users.splice(0, 1);
  for (const user of users) {
    if (user.id == req.params.id) {

      res.send(`${req.params.name} 님이 삭제되었습니다. `);
      users.splice(req.params.id - 1, 1);
    }
  }

});


app.listen(app.get("port"), () => {
  console.log(app.get("port"), "port stand by");
});