const express = require("express");
const Register = require("../database");
//const Mapping=require("./Operokations");
const Router = express.Router();
Router.get("/", (req, res) => {
  res.send("Hello World");
});
Router.post("/Insert", (req, res) => {
  let Details = req.body;
  console.log(Details);
  Register.Register("register1", "Insert", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});
Router.delete("/Delete:email", (req, res) => {
  let Details = req.params.email;
  Register.Register("register1", "Delete", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});
Router.put("/Update:email", (req, res) => {
  let Details = req.params.email;
  let UpdatedDetails = req.body;
  console.log(UpdatedDetails);
  console.log(Details);
  Register.Register("register1", "Update", Details,UpdatedDetails)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});
Router.get("/Read:email", (req, res) => {
  const Details = req.params.email;
  Register.Register("register1", "Read", Details)
    .then((result) => {
      res.send({ Message: result.Message,Result:result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

Router.get("/Read1:ID", (req, res) => {
  const Details = req.params.ID;
  Register.Register("register1", "Read1", Details)
    .then((result) => {
      res.send({ Message: result.Message,Result:result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

module.exports = Router;



