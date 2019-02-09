const router = require("express").Router();
const usercontrollers = require("../../controllers/usercontrollers");

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usercontrollers.findById)
  .put(usercontrollers.update)
  .delete(usercontrollers.remove);

router
  .route("/")
  .get(usercontrollers.findAll)
  .post(usercontrollers.create);

module.exports = router;
