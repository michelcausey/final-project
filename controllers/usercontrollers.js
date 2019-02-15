const db = require("../models");

// Defining methods for the UsersController
module.exports = {
 findAll: function(req, res) {
   console.log(req.query)
   db.User
     .find(req.query)
     .sort({ date: -1 })
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
 },
 findUser: function(req, res) {
  console.log("find user")
  const {userName, password} = req.query
  console.log(userName, password)
  db.User
    .findOne({userName: userName})
    .then(dbUser => {
      console.log(dbUser)

      if (!dbUser) {
        console.log("not an existing user")
        res.json({
          code: 12345,
          msg: "not an existing user",
          user: null
        })
      } else if (userName === dbUser.userName && password === dbUser.password) {
        console.log("username & password are correct")
        res.json({
          code: 98765,
          msg: "user successfully logged in",
          user: dbUser
        })
      } else {
        res.json({
          code: 45251,
          msg: "incorrect log-in credentials",
          user: dbUser
      })
    }
  })
    .catch(err => res.status(422).json(err));
},
 findById: function(req, res) {
   console.log("find by ID")
   db.User
     .findById(req.params.id)
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
 },
 create: function(req, res) {
   console.log(req.body)
   db.User
     // find by username and if it doesn't exist, create a new user
     .create(req.body)
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
 },
 update: function(req, res) {
   db.User
     .findOneAndUpdate({ _id: req.params.id }, req.body)
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
 },
 remove: function(req, res) {
   db.User
     .findById({ _id: req.params.id })
     .then(dbModel => dbModel.remove())
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
 }
};