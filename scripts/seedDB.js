const mongoose = require("mongoose");
const db = require("../models");

console.log(db)

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CYOA"
);

const userSeed = [
  {
    firstName: "MiChel",
    lastName: "Causey",
    userName: "meeshmello",
    password: "123456"
  },
  {
    firstName: "Sanya",
    lastName: "Matani",
    userName: "sanyanmichel",
    password: "654321"
  },
  {
    firstName: "Example First",
    lastName: "Example Last",
    userName: "userExample",
    password: "password"
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  