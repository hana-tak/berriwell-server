/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex) {
  await knex.schema.createTable("health_plan", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned().notNullable();
    table.string("task").notNullable();
    table.string("amount").notNullable();
    table.string("frequency").notNullable();
    table.foreign("user_id").references("users.id").onDelete("CASCADE");
    table.timestamp("last_updated").defaultTo(knex.fn.now());
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function (knex) {
  await knex.schema.dropTable("health_plan");
};