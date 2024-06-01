const router = require("express").Router();
const resourceController = require("../controller/resources_controller");

router
    .route("/")
    .get(resourceController.index)

router
    .route("/:id")
    .get(resourceController.findResource)

module.exports = router;