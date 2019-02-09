const router = require("express").Router();
const usercontrollers = require("../../usercontrollers.js");

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(usercontrollers.findById)
  .put(usercontrollers.update)
  .delete(usercontrollers.remove);

module.exports = router;
