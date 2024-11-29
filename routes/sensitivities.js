import express from 'express';
import {
    getFoodSensitivities,
    updateFoodSensitivity
} from '../controllers/sensitivitiesController.js';

const router = express.Router();

router.get('/:id', getFoodSensitivities);
router.put('/:sensitivity_id', updateFoodSensitivity);

export default router;