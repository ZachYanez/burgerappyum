// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selectAll(cb) {
    orm.selectAll("burgers", (results) => {
      cb(results);
    });
  },
  
  insertOne(name, cb) {
    orm.insertOne("burgers", name, cb, (result) => {
      cb(result);
    });
  },
  updateOne(condition, cb) {
    orm.updateOne("burgers", condition, (result) => {
      cb(result);
    });
  }
  // delete(condition, cb) {
  //   orm.delete("burgers", condition, (result) => {
  //     cb(result);
  //   });
  // }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
