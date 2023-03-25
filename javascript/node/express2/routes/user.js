import express from "express";
import {
  addInfo,
  readAllInfo,
  readById,
  updateUserById,
  deleteById,
} from "../repository/index.js";
import {ObjectId} from "mongodb";
import {StatusCodes} from "http-status-codes";

const router = express.Router();


router.route("/api/users")
  .get(async (req, res) => {
    let findUser = {};
    if (req.query.userName) {
      findUser["userName"] = req.query.userName;
    }
    if (req.query.phoneNumber) {
      findUser["phoneNumber"] = req.query.phoneNumber;
    }
    if (req.query.email) {
      findUser["email"] = req.query.email;
    }
    if (req.query.address) {
      findUser["address"] = {$regex: req.query.address};
    }
    let users = await readAllInfo(findUser);
    console.log(users);
    res.status(StatusCodes.OK)
      .send(JSON.stringify(users));
  })
  .post(async (req, res) => {
    if (req.body["userName"] &&
      req.body["address"] &&
      req.body["phoneNumber"] &&
      req.body["email"]) {
      const newUser = await addInfo(req.body);
      res.status(StatusCodes.CREATED)
        .send(newUser);
    } else {
      console.log(req.body);
      console.log("Add Failed");
    }
  });

router.route("/api/users/:userId")
  .patch(async (req, res) => {
    console.log(`${JSON.stringify(req.body)}`);
    console.log();
    const foundUser = await readById(req.params.userId);
    let result = null;
    if (foundUser != null) {
      let user = {
        userName: req.body["userName"] || foundUser.userName,
        address: req.body["address"] || foundUser.address,
        phoneNumber: req.body["phoneNumber"] || foundUser.phoneNumber,
        email: req.body["email"] || foundUser.email,
      };
      result = await updateUserById(foundUser._id, user);
    }
    res.status(StatusCodes.OK)
      .send(result);
  })
  .delete(async (req, res) => {
    const deleteResult = await deleteById(req.params.userId);
    if (deleteResult.deletedCount === 0) {
      console.log("삭제를 실패했습니다");
    } else {
      res.status(StatusCodes.OK)
        .send("삭제가 완료되었습니다");
    }
  });

export default router;
