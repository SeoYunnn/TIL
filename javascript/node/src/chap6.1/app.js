import nunjucks from "nunjucks";
import express from "express";

import * as path from "path";
import {fileURLToPath} from "url";

const app = express(); //express 사용하기 위한 변수
// const router = express.Router();


app.set("port", process.env.PORT || 3000);
app.set("view engine", "html");
app.listen(app.get("port"), () => {
  console.log("포트번호 | ", app.get("port"));
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


nunjucks.configure("view", {
  express: app,
  watch: true,
});

app.use(express.static(path.join(__dirname, "js")));

app.get("/", (req, res) => {
  res.render("index", {title: "Express"});

});