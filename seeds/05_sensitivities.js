/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex("food_sensitivities").del();
  await knex("food_sensitivities").insert([
    {
      id: 1,
      user_id: 1,
      category: "Dairy_Egg",
      food_name: "Egg White",
      reaction: "High",
      created_at: knex.fn.now(),
    },
    {
      id: 2,
      user_id: 1,
      category: "Vegetables",
      food_name: "Broccoli",
      reaction: "Moderate",
      created_at: knex.fn.now(),
    },
    {
      id: 3,
      user_id: 1,
      category: "Grains",
      food_name: "Rye",
      reaction: "Low",
      created_at: knex.fn.now(),
    },
  ]);
};
