/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex("appointments").del();
  await knex("appointments").insert([
    {
      id: 1,
      user_id: 1,
      date: "2024-11-22",
      time: "09:30:00",
      doctor_name: "Dr. Sarah Wilson",
      appointment_type: "Routine Checkup",
      created_at: knex.fn.now(),
    },
    {
      id: 2,
      user_id: 2,
      date: "2024-11-25",
      time: "14:00:00",
      doctor_name: "Dr. Emily Carter",
      appointment_type: "Follow-up",
      created_at: knex.fn.now(),
    },
    {
      id: 3,
      user_id: 3,
      date: "2024-11-28",
      time: "11:00:00",
      doctor_name: "Dr. James Brown",
      appointment_type: "Consultation",
      created_at: knex.fn.now(),
    },
    {
      id: 4,
      user_id: 1,
      date: "2024-12-01",
      time: "16:00:00",
      doctor_name: "Dr. Laura Adams",
      appointment_type: "Specialist Referral",
      created_at: knex.fn.now(),
    },
    {
      id: 5,
      user_id: 2,
      date: "2024-12-05",
      time: "08:00:00",
      doctor_name: "Dr. William Lee",
      appointment_type: "Annual Physical",
      created_at: knex.fn.now(),
    },
  ]);
};
