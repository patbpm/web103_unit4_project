import express from "express";
import exteriorController from "../controllers/exteriorController.js";

const router = express.Router();

router.route("/:exterior_id").get(exteriorController.getExteriorById);

export default router;
