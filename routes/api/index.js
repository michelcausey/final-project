const router = require("express").Router();
const usersRoutes = require("./users");

// Project routes
router.use("/users", usersRoutes);

module.exports = router;