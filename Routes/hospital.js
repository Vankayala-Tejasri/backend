const express = require("express");
const Hospital = require("../database");
//const Mapping=require("./Operokations");
const Router = express.Router();
Router.get("/", (req, res) => {
  res.send("Hello World");
});
Router.post("/Insert", (req, res) => {
  let Details = req.body;
  console.log(Details);
  Hospital.Hospital("hospital", "Insert", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});
Router.delete("/Delete:ID", (req, res) => {
  let Details = req.params.ID;
  Hospital.Hospital("hospital", "Delete", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});
Router.put("/Update:ID", (req, res) => {
  let Details = req.params.ID;
  let UpdatedDetails = req.body;
  console.log(UpdatedDetails);
  console.log(Details);
  Hospital.Hospital("hospital", "Update", Details,UpdatedDetails)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});
Router.get("/Read:ID", (req, res) => {
  const Details = req.params.ID;
  Hospital.Hospital("hospital", "Read", Details)
    .then((result) => {
      res.send({ Message: result.Message,Result:result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

module.exports = Router;



