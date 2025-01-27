import express from "express";
import roofController from "../controllers/roofController.js";

const router = express.Router();

router.route("/:roof_id").get(roofController.getRoofById);

export default router;
