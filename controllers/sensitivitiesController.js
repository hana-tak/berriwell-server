import knex from '../knex.js';

export const getFoodSensitivities = async (req, res) => {
    try {
        const sensitivities = await knex('food_sensitivities').where('user_id', req.params.id);
        res.json(sensitivities);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateFoodSensitivity = async (req, res) => {
    try {
        const { reaction } = req.body;
        const updated = await knex('food_sensitivities')
            .where('id', req.params.sensitivity_id)
            .update({ reaction });

        if (!updated) return res.status(404).json({ message: 'Food sensitivity not found' });
        res.json({ message: 'Reaction updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};