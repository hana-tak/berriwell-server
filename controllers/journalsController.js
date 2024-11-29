import knex from '../knex.js';

export const getJournals = async (req, res) => {
    try {
        const journals = await knex('symptom_journals').where('user_id', req.params.id);
        res.json(journals);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const addJournal = async (req, res) => {
    try {
        const { user_id, pain_scale, date, time, symptoms, notes } = req.body;
        const [id] = await knex('symptom_journals').insert({
            user_id,
            pain_scale,
            date,
            time,
            symptoms,
            notes
        });
        res.status(201).json({ id, pain_scale, date, time, symptoms, notes });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateJournal = async (req, res) => {
    try {
        const { pain_scale, date, time, symptoms, notes } = req.body;
        const updated = await knex('symptom_journals')
            .where('id', req.params.journal_id)
            .update({ pain_scale, date, time, symptoms, notes });

        if (!updated) return res.status(404).json({ message: 'Journal entry not found' });
        res.json({ message: 'Journal entry updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteJournal = async (req, res) => {
    try {
        const deleted = await knex('symptom_journals').where('id', req.params.journal_id).del();

        if (!deleted) return res.status(404).json({ message: 'Journal entry not found' });
        res.json({ message: 'Journal entry deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};