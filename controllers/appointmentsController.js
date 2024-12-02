import knex from "../knex.js";

export const getAppointments = async (req, res) => {
  try {
    const { userId, id } = req.query;
    let query = knex("appointments");
    if (userId) {
      query = query.where("user_id", userId);
    }
    if (id) {
      query = query.andWhere("id", id);
    }
    const appointments = await query;
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addAppointment = async (req, res) => {
  try {
    const { user_id, date, time, doctor_name, appointment_type } = req.body;

    if (!user_id || !date || !time || !doctor_name || !appointment_type) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const [id] = await knex("appointments").insert({
      user_id,
      date,
      time,
      doctor_name,
      appointment_type,
    });

    const newAppointment = await knex("appointments").where("id", id).first();
    res.status(201).json(newAppointment);
    res.json({ message: "Appointment added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateAppointment = async (req, res) => {
  let { id, userId } = req.query;
  const { date, time, doctor_name, appointment_type } = req.body;

  if (!id || !userId) {
    return res.status(400).json({ error: "id and userId are required" });
  }

  id = parseInt(id, 10);
  userId = parseInt(userId, 10);

  if (isNaN(id) || isNaN(userId)) {
    return res
      .status(400)
      .json({ error: "id and userId must be valid numbers" });
  }

  try {
    const updated = await knex("appointments")
      .where({ id, user_id: userId })
      .update({ date, time, doctor_name, appointment_type });

    if (!updated) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    res.json({ message: "Appointment updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteAppointment = async (req, res) => {
  let { id, userId } = req.query;

  if (!id || !userId) {
    return res.status(400).json({ error: "id and userId are required" });
  }

  id = parseInt(id, 10);
  userId = parseInt(userId, 10);

  if (isNaN(id) || isNaN(userId)) {
    return res
      .status(400)
      .json({ error: "id and userId must be valid numbers" });
  }

  try {
    const deleted = await knex("appointments")
      .where({ id, user_id: userId })
      .del();

    if (!deleted) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    res.json({ message: "Appointment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
