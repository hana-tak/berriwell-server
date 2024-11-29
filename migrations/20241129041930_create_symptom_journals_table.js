/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex) {
  await knex.schema.createTable("symptom_journals", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE"); // Deletes symptom journals if user is deleted
    table.integer("pain_scale").notNullable(); // Pain scale (e.g., 1-10)
    table.date("date").notNullable();
    table.time("time").notNullable();
    table.text("symptoms").notNullable(); // JSON column for symptoms
    table.text("notes"); // Optional notes
    table.timestamps(true, true); // created_at and updated_at
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function (knex) {
  await knex.schema.dropTable("symptom_journals");
};