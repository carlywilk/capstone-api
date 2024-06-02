const router = require("express").Router();
const servicesController = require("../controller/services.controller");

router
    .route("/")
    .get(servicesController.index)

module.exports = router;