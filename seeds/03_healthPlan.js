/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex("health_plan").del();
  await knex("health_plan").insert([
    {
      id: 1,
      user_id: 1,
      task: "Take Vitamin D",
      amount: "600IU",
      frequency: "Daily",
      last_updated: knex.fn.now(),
    },
    {
      id: 2,
      user_id: 1,
      task: "Take Probiotics",
      amount: "1 scoop",
      frequency: "Every Morning",
      last_updated: knex.fn.now(),
    },
    {
      id: 3,
      user_id: 1,
      task: "Eat a high-protein breakfast",
      amount: "20g",
      frequency: "Every Morning",
      last_updated: knex.fn.now(),
    },
    {
      id: 4,
      user_id: 2,
      task: "Take omega-3 supplements",
      amount: "1 pill",
      frequency: "Daily",
      last_updated: knex.fn.now(),
    },
    {
      id: 5,
      user_id: 3,
      task: "Chew food before swallowing",
      amount: "25x times",
      frequency: "Every bite",
      last_updated: knex.fn.now(),
    },
    {
      id: 6,
      user_id: 3,
      task: "Avoid processed sugar",
      amount: "10g max",
      frequency: "Daily",
      last_updated: knex.fn.now(),
    },
    {
      id: 7,
      user_id: 4,
      task: "Take Inositol",
      amount: "1 scoop",
      frequency: "Daily",
      last_updated: knex.fn.now(),
    },
  ]);
};