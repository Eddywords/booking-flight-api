const router = require("express").Router();

const controller = require("../controller/flightController")

router
    .get("/", controller.getFlights)

    .get("/:id", controller.getFlight)

    .put("/:id", controller.updateFlight)

    .post("/", controller.createFlight)

    .delete("/:id", controller.deleteFlight);


module.exports = router;