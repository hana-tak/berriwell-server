/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex) {
  await knex.schema.createTable("food_sensitivities", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE"); // Deletes sensitivities if user is deleted
    table.string("category").notNullable(); // Category (e.g., Vegetables, Grains)
    table.string("food_name").notNullable(); // Name of the food
    table.string("reaction").notNullable(); // Reaction severity (e.g., High, Moderate, Low)
    table.timestamps(true, true); // created_at and updated_at
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function (knex) {
  await knex.schema.dropTable("food_sensitivities");
};