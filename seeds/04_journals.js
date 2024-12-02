/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
    await knex('symptom_journal').del();
    await knex('symptom_journal').insert([
      {
        id: 1,
        user_id: 1,
        pain_scale: 3,
        date: '2024-11-20',
        symptoms: JSON.stringify(["Headache", "Fatigue"]),
        notes: "Mild headache in the morning but improved after breakfast.",
        created_at: knex.fn.now()
      },
      {
        id: 2,
        user_id: 2,
        pain_scale: 7,
        date: '2024-11-21',
        symptoms: JSON.stringify(["Joint pain", "Swelling"]),
        notes: "Painful swelling in the knees after a long walk.",
        created_at: knex.fn.now()
      },
      {
        id: 3,
        user_id: 3,
        pain_scale: 3,
        date: '2024-11-22',
        symptoms: JSON.stringify(["Dizziness"]),
        notes: "Mild dizziness after skipping lunch.",
        created_at: knex.fn.now()
      },
      {
        id: 4,
        user_id: 1,
        pain_scale: 4,
        date: '2024-11-24',
        symptoms: JSON.stringify(["Upset stomach"]),
        notes: "Upset stomach after eating spicy food.",
        created_at: knex.fn.now()
      },
      {
        id: 5,
        user_id: 1,
        pain_scale: 7,
        date: '2024-11-24',
        symptoms: JSON.stringify(["Bloating", "Cramps"]),
        notes: "Experienced bloating and cramps after consuming dairy.",
        created_at: knex.fn.now()
      },
      {
        id: 6,
        user_id: 1,
        pain_scale: 8,
        date: '2024-11-25',
        symptoms: JSON.stringify(["Acid reflux"]),
        notes: "Severe acid reflux after eating fried food.",
        created_at: knex.fn.now()
      },
      {
        id: 7,
        user_id: 2,
        pain_scale: 5,
        date: '2024-11-26',
        symptoms: JSON.stringify(["Nausea", "Headache"]),
        notes: "Nausea and headache triggered by consuming too much sugar.",
        created_at: knex.fn.now()
      },
    ]);
  };