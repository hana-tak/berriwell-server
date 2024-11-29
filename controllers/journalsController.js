import knex from "../knex.js";

export const getJournals = async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ error: "User ID is required." });
  }
  console.log("User ID received:", userId);
  try {
    const journals = await knex("symptom_journal").where("user_id", userId);
    res.json(journals);
  } catch (err) {
    console.error("Error fetching symptom journals:", err);
    res.status(500).json({ error: "Failed to fetch symptom journals." });
  }
};

export const addJournal = async (req, res) => {
  const { user_id, date, pain_scale, symptoms, notes } = req.body;

  if (!user_id || !date || !pain_scale || !symptoms) {
    return res.status(400).json({ error: "Required fields are missing." });
  }

  try {
    const [id] = await knex("symptom_journal").insert({
      user_id,
      date,
      pain_scale,
      symptoms: JSON.stringify(symptoms),
      notes,
    });

    res.status(201).json({ id, user_id, date, pain_scale, symptoms, notes });
  } catch (err) {
    console.error("Error adding symptom journal entry:", err);
    res.status(500).json({ error: "Failed to add symptom journal entry." });
  }
};

export const updateJournal = async (req, res) => {
    const { id, userId } = req.query;
    const { date, pain_scale, symptoms, notes } = req.body;
  
    if (!id || !userId) {
      return res.status(400).json({ error: 'Both id and userId are required.' });
    }
  
    try {
      await knex('symptom_journal')
        .where({ id, user_id: userId })
        .update({
          date,
          pain_scale,
          symptoms: JSON.stringify(symptoms),
          notes,
        });
      res.status(200).json({ message: 'Symptom journal updated successfully.' });
    } catch (error) {
      console.error('Error updating symptom journal:', error);
      res.status(500).json({ error: 'Failed to update symptom journal.' });
    }
  };

export const deleteJournal = async (req, res) => {
  const { id, userId } = req.query;
  if (!id || !userId)
    return res.status(400).json({ error: "id and userId are required." });

  try {
    const deleted = await knex("symptom_journal")
      .where({ id, user_id: userId })
      .del();
    if (!deleted) return res.status(404).json({ error: "Record not found." });
    res.json({ message: "Symptom journal entry deleted." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
