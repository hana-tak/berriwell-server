import knex from "../knex.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await knex("users").where({ id }).first();
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const [id] = await knex("users").insert({ name, email });
    res.status(201).json({ id, name, email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
