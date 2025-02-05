import express from "express";
import wheelsController from "../controllers/wheelsController.js";

const router = express.Router();

router.route("/:wheels_id").get(wheelsController.getWheelsById);

export default router;
