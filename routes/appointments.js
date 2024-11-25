import express from 'express';
import {
    getAppointments,
    addAppointment,
    updateAppointment,
    deleteAppointment
} from '../controllers/appointmentsController.js';

const router = express.Router();

router.get('/:id', getAppointments);
router.post('/', addAppointment);
router.put('/:appointment_id', updateAppointment);
router.delete('/:appointment_id', deleteAppointment);

export default router;