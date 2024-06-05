const router = require("express").Router();
const resourceController = require("../controller/resources_controller");

router
    .route("/")
    .get(resourceController.index)

router
    .route("/:id")
    .get(resourceController.findResource)

router
    .route("/:id/services")
    .get(resourceController.findServices)

module.exports = router;