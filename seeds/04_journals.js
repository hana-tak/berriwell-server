/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
    await knex('symptom_journals').del();
    await knex('symptom_journals').insert([
      {
        id: 1,
        user_id: 1,
        pain_scale: 5,
        date: '2024-11-20',
        time: '08:30:00',
        symptoms: JSON.stringify(["Headache", "Fatigue"]),
        notes: "Mild headache in the morning but improved after breakfast.",
        created_at: knex.fn.now()
      },
      {
        id: 2,
        user_id: 2,
        pain_scale: 7,
        date: '2024-11-21',
        time: '14:00:00',
        symptoms: JSON.stringify(["Joint pain", "Swelling"]),
        notes: "Painful swelling in the knees after a long walk.",
        created_at: knex.fn.now()
      },
      {
        id: 3,
        user_id: 3,
        pain_scale: 3,
        date: '2024-11-22',
        time: '18:00:00',
        symptoms: JSON.stringify(["Dizziness"]),
        notes: "Mild dizziness after skipping lunch.",
        created_at: knex.fn.now()
      },
      {
        id: 4,
        user_id: 4,
        pain_scale: 8,
        date: '2024-11-23',
        time: '20:00:00',
        symptoms: JSON.stringify(["Chest tightness"]),
        notes: "Experienced chest tightness after a stressful meeting.",
        created_at: knex.fn.now()
      },
      {
        id: 5,
        user_id: 5,
        pain_scale: 4,
        date: '2024-11-24',
        time: '10:00:00',
        symptoms: JSON.stringify(["Upset stomach"]),
        notes: "Upset stomach after eating spicy food.",
        created_at: knex.fn.now()
      }
    ]);
  };