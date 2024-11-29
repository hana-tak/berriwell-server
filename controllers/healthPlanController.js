import knex from '../knex.js';

export const getHealthPlan = async (req, res) => {
    try {
        const healthPlan = await knex('health_plan').where('user_id', req.params.id).first();
        if (!healthPlan) return res.status(404).json({ message: 'Health plan not found' });
        res.json(healthPlan);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const addHealthPlan = async (req, res) => {
    try {
        const { user_id, tasks } = req.body;
        const [id] = await knex('health_plan').insert({ user_id, tasks });
        res.status(201).json({ id, user_id, tasks });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateHealthPlan = async (req, res) => {
    try {
        const { tasks } = req.body;
        const updated = await knex('health_plan').where('user_id', req.params.id).update({ tasks });

        if (!updated) return res.status(404).json({ message: 'Health plan not found' });
        res.json({ message: 'Health plan updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteHealthPlan = async (req, res) => {
    try {
        const deleted = await knex('health_plan').where('user_id', req.params.id).del();

        if (!deleted) return res.status(404).json({ message: 'Health plan not found' });
        res.json({ message: 'Health plan deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};