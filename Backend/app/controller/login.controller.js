const { Account } = require("../models/index.model.js");
const jwt = require("jsonwebtoken");
const secret = "asdfghjkl!@#";
exports.login = async (req, res, next) => {
  const { userName, password } = req.body;
  console.log(userName, password);
  try {
    const documents = await Account.findOne({
      where: {
        userName: userName,
        password: password,
      },
    });

    if (documents) {
      const refreshToken = documents["_id"];
      res.cookie("refreshToken", refreshToken, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
        httpOnly: true,
        secure: true,
      });

      jwt.sign(documents["_id"], secret, function (err, data) {
        return res.send({
          message: "success",
          token: data,
          role: documents["role"],
          _id: documents["_id"],
        });
      });
    } else {
      res.send({ message: "fail", status: "fail" });
    }
  } catch (error) {
    res.send({ message: error, status: "fail" });
  }
};
exports.refreshAccessToken = async (req, res, next) => {
  const refreshToken = req.cookies["refreshToken"];
  console.log("refreshToken:", refreshToken);
  try {
    const documents = await Account.findOne({
      where: {
        _id: refreshToken,
      },
    });
    if (documents) {
      const refreshToken = documents["_id"];
      res.cookie("refreshToken", refreshToken, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
        httpOnly: true,
        secure: true,
      });

      jwt.sign(documents["_id"], secret, function (err, data) {
        return res.send({
          message: "success",
          token: data,
          role: documents["role"],
          _id: documents["_id"],
        });
      });
    } else {
      res.send({ message: "fail", status: "fail" });
    }
  } catch (error) {
    res.send({ message: error, status: "fail" });
  }
};
