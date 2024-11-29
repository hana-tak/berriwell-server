import express from 'express';
import { getHealthPlan, addHealthPlan, updateHealthPlan, deleteHealthPlan } from '../controllers/healthPlanController.js';

const router = express.Router();

router.get('/', getHealthPlan);
router.post('/', addHealthPlan);
router.put('/', updateHealthPlan);
router.delete('/', deleteHealthPlan);

export default router;