import knex from '../knexfile.js';

export const getFoodSensitivities = async (req, res) => {
    try {
        const sensitivities = await knex('food_sensitivities').where('user_id', req.params.id);
        res.json(sensitivities);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const addFoodSensitivity = async (req, res) => {
    try {
        const { user_id, category, food_name, reaction } = req.body;
        const [id] = await knex('food_sensitivities').insert({
            user_id,
            category,
            food_name,
            reaction
        });
        res.status(201).json({ id, category, food_name, reaction });
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