const express = require("express");
const wifiConnectionController = require("../../controllers/wifiConnections.controller");

const router = express.Router();

router.route("/")
    .post(wifiConnectionController.createNewConnection)
    .get(wifiConnectionController.getAllConnections);

router.route("/:id")
    .get(wifiConnectionController.getConnectionById)
    .put(wifiConnectionController.updateConnection)
    .delete(wifiConnectionController.deleteConnection);

module.exports = router;