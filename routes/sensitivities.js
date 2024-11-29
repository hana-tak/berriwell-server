import express from "express";
import {
  getFoodSensitivities,
  updateFoodSensitivity,
} from "../controllers/sensitivitiesController.js";

const router = express.Router();

router.get("/", getFoodSensitivities);
router.put("/:id", updateFoodSensitivity);

export default router;