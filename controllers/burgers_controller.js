const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
    burger.all((data) => {
      const viewData = {
        burgers: data
      };
      console.log(viewData);
      res.render("index", viewData);
    });
  });
  
  router.post("/api/burgers", (req, res) => {
    burger.create(["name", "devoured"], [req.body.name, req.body.devoured], (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", (request, response) => {
    const condition = { id: request.params.id };
  
    console.log("condition", condition);
  
    burger.update({ devoured: request.body.devoured }, condition, (result) => {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return response.status(404).end();
      }
      response.status(200).end();
    });
  });



module.exports = router