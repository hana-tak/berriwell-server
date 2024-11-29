import express from 'express';
import {
    getAppointments,
    addAppointment,
    updateAppointment,
    deleteAppointment
} from '../controllers/appointmentsController.js';

const router = express.Router();

router.get('/', getAppointments);
router.post('/', addAppointment);
router.put('/', updateAppointment);
router.delete('/', deleteAppointment);

export default router;