const router = require("express").Router();
const servicesController = require("../controller/services.controller");

router
    .route("/")
    .get(servicesController.index)

router
    .route("/:serviceType")
    .get(servicesController.findService)

module.exports = router;