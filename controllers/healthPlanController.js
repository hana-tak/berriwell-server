import knex from "../knex.js";

export const getHealthPlan = async (req, res) => {
  try {
    const { userId, id } = req.query;
    const query = knex("health_plan").where("user_id", userId);

    if (id) {
      query.andWhere("id", id);
    }

    const healthPlans = await query;
    res.json(healthPlans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addHealthPlan = async (req, res) => {
  try {
    const { user_id, task, amount, frequency } = req.body;
    const [id] = await knex("health_plan").insert({
      user_id,
      task,
      amount,
      frequency,
    });
    res.status(201).json({ id, task, amount, frequency });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateHealthPlan = async (req, res) => {
  try {
    const { id, userId } = req.query;
    const { task, amount, frequency } = req.body;
    const updated = await knex("health_plan")
      .where({ id, user_id: userId })
      .update({ task, amount, frequency });

    if (!updated)
      return res.status(404).json({ message: "Health plan not found" });
    res.json({ message: "Health plan updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteHealthPlan = async (req, res) => {
  try {
    const { id, userId } = req.query; // Extract parameters correctly

    // Validate the inputs
    if (!id || !userId) {
      return res
        .status(400)
        .json({ error: "Both id and userId are required." });
    }

    console.log(`Deleting health plan with id: ${id} for userId: ${userId}`); // Debug log

    // Ensure the parameters are integers
    const parsedId = parseInt(id, 10);
    const parsedUserId = parseInt(userId, 10);

    if (isNaN(parsedId) || isNaN(parsedUserId)) {
      return res
        .status(400)
        .json({ error: "id and userId must be valid numbers." });
    }

    // Execute the query
    const deletedRows = await knex("health_plan")
      .where("id", parsedId)
      .andWhere("user_id", parsedUserId)
      .del();

    if (deletedRows === 0) {
      return res
        .status(404)
        .json({ error: "Health plan not found or already deleted." });
    }

    res.json({ message: "Health plan deleted successfully." });
  } catch (error) {
    console.error("Error deleting health plan:", error.message); // Log the actual error
    res.status(500).json({ error: error.message });
  }
};