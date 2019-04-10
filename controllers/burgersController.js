var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


//get route
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// post route
router.post("/api/burgers", function (req, res) {
    burger.create([
        "name", "ate"
    ], [
            req.body.name, req.body.ate
        ], function (result) {
            res.json({ id: result.insertId });
        });
});


//put route
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        ate: req.body.ate
    }, condition, function (result) {
        if (result.changedRows == 0) {
            //If no rows were changed then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


// delete route
router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;