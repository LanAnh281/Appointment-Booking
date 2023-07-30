const app = require("./app");
const {
  config,
  connection,
  sequelize,
  createTable,
} = require("./app/config/index");
//Declaration models to auto create tables
const { Customer_Types, Customer } = require("./app/models/index.model");
// connect to the database
connection();
//auto create table in the database
createTable();
// start server
const PORT = config.app.port;

// app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
// })
