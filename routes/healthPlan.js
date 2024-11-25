import express from 'express';
import { getHealthPlan, addHealthPlan, updateHealthPlan } from '../controllers/healthPlanController.js';

const router = express.Router();

router.get('/:id', getHealthPlan);
router.post('/', addHealthPlan);
router.put('/:id', updateHealthPlan);
router.delete('/:id', deleteHealthPlan);

export default router;