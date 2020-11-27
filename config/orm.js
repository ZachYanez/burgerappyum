const connection = require('./connection');


const orm = {
    selectAll: (table, cb) => {
        const queryString = `SELECT * FROM ${table}`;
        console.log(queryString);
        const query = connection.query(queryString, [table], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result)
        });
    },

    insertOne: (table, name, cb) => {
        const queryString = `INSERT INTO ${table} (burger_name) VALUES ("${name}")`;
        console.log(queryString);
        const query = connection.query(queryString, [table, name], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: (table, condition, cb) => {
        let queryString = 'UPDATE ' + table + ' SET devoured = true WHERE ' + condition;
        console.log(queryString);
        connection.query(queryString, (err, result) => {
          if (err) {
            throw err;
          }
          cb(result);
        });

    },
}

module.exports = orm;