import knex from '../knexfile.js';

export const getUser = async (req, res) => {
    try {
        const user = await knex('users').where('id', req.params.id).first();
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const [id] = await knex('users').insert({ name, email });
        res.status(201).json({ id, name, email });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};