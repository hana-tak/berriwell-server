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
  const { severity, user_id } = req.body;

  if (!id || !severity || !user_id) {
    return res
      .status(400)
      .json({ error: "ID, user_id, and severity are required." });
  }

  try {
    const result = await knex("food_sensitivities")
      .where({ id, user_id })
      .update({ severity });

    if (result) {
      res.status(200).json({ message: "Severity updated successfully." });
    } else {
      res.status(404).json({ error: "Food sensitivity not found." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update severity." });
  }
};
