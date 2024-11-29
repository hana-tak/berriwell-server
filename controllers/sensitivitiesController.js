import knex from "../knex.js";

export const getFoodSensitivities = async (req, res) => {
  const { userId } = req.query;
  if (!userId) return res.status(400).json({ error: "userId is required" });

  try {
    const sensitivities = await knex("food_sensitivities").where({
      user_id: userId,
    });
    res.json(sensitivities);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sensitivities." });
  }
};

export const updateFoodSensitivity = async (req, res) => {
  const { id } = req.params;
  const { severity } = req.body;

  if (!["normal", "borderline", "elevated"].includes(severity)) {
    return res.status(400).json({ error: "Invalid severity value." });
  }

  try {
    await knex("food_sensitivities").where({ id }).update({ severity });
    res.json({ message: "Severity updated successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to update severity." });
  }
};
