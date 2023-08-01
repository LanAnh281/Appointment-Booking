const { DataTypes, Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const { sequelize } = require("../config/index");

const setPrimary = {
  type: DataTypes.STRING,
  defaultValue: () => uuidv4(), // create string unique
  primaryKey: true,
};

// Models

const Account = sequelize.define("Account", {
  _id: setPrimary,
  userName: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Tên tài khoản khách hàng không được bỏ trống.",
      },
    },
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "mật khẩu khách hàng không được bỏ trống.",
      },
    },
  },
  role: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "mật khẩu khách hàng không được bỏ trống.",
      },
    },
  },
});
const Customer = sequelize.define("Customer", {
  _id: setPrimary,
  userName: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Tên tài khoản khách hàng không được bỏ trống.",
      },
    },
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "mật khẩu khách hàng không được bỏ trống.",
      },
    },
  },
  role: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "mật khẩu khách hàng không được bỏ trống.",
      },
    },
  },
});
// Sync the model with the database
Account.sync();
Customer.sync();
module.exports = {
  Account,
  Customer,
};
