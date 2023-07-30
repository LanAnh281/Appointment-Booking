const { DataTypes, Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const { sequelize } = require("../config/index");

const setPrimary = {
  type: DataTypes.STRING,
  defaultValue: () => uuidv4(), // create string unique
  primaryKey: true,
};

// Models
const Customer_Types = sequelize.define("Customer_Types", {
  _id: setPrimary,
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Tên loại khách hàng không được bỏ trống.",
      },
    },
  },
});
const Customer = sequelize.define("Customer", {
  _id: setPrimary,
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Tên loại khách hàng không được bỏ trống.",
      },
    },
  },
});
// Sync the model with the database
Customer_Types.sync();
Customer.sync();

module.exports = {
  Customer_Types,
  Customer,
};
