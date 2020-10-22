

// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  all(cb) {
    orm.all("burgers", (results) => {
      cb(results);
    });
  },
  // The variables cols and vals are arrays.
  create(cols, vals, cb) {
    orm.create("burgers", cols, vals, (result) => {
      cb(result);
    });
  },
  update(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, (result) => {
      cb(result);
    });
  },
//   delete(condition, cb) {
//     orm.delete("burgers", condition, (result) => {
//       cb(result);
//     });
//   }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
