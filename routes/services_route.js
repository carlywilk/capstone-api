const router = require("express").Router();
const servicesController = require("../controller/services.controller");

router
    .route("/")
    .get(servicesController.index)

// router
//     .route("/:id/services")
//     .get(servicesController.resourceServices)

module.exports = router;