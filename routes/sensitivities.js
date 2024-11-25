import express from 'express';
import {
    getFoodSensitivities,
    addFoodSensitivity,
    updateFoodSensitivity
} from '../controllers/sensitivitiesController.js';

const router = express.Router();

router.get('/:id', getFoodSensitivities);
router.post('/', addFoodSensitivity);
router.put('/:sensitivity_id', updateFoodSensitivity);

export default router;