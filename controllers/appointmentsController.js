import knex from '../knexfile.js';

export const getAppointments = async (req, res) => {
    try {
        const appointments = await knex('appointments').where('user_id', req.params.id);
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const addAppointment = async (req, res) => {
    try {
        const { user_id, date, time, doctor_name, appointment_type } = req.body;
        const [id] = await knex('appointments').insert({ user_id, date, time, doctor_name, appointment_type });
        res.status(201).json({ id, date, time, doctor_name, appointment_type });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateAppointment = async (req, res) => {
    try {
        const { date, time, doctor_name, appointment_type } = req.body;
        const updated = await knex('appointments')
            .where('id', req.params.appointment_id)
            .update({ date, time, doctor_name, appointment_type });

        if (!updated) return res.status(404).json({ message: 'Appointment not found' });
        res.json({ message: 'Appointment updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteAppointment = async (req, res) => {
    try {
        const deleted = await knex('appointments').where('id', req.params.appointment_id).del();

        if (!deleted) return res.status(404).json({ message: 'Appointment not found' });
        res.json({ message: 'Appointment deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};