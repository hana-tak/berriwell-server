/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex) {
  await knex.schema.createTable("symptom_journal", (table) => {
    //     table.increments("id").primary();
    //     table
    //       .integer("user_id")
    //       .unsigned()
    //       .notNullable()
    //       .references("id")
    //       .inTable("users")
    //       .onDelete("CASCADE");
    //     table.integer("pain_scale").notNullable();
    //     table.date("date").notNullable();
    //     table.time("time").notNullable();
    //     table.text("symptoms").notNullable(); // JSON column for symptoms
    //     table.text("notes"); // Optional notes
    //     table.timestamps(true, true); // created_at and updated_at
    //   });
    // };
    table.increments("id").primary();
    table.date("date").notNullable();
    table.integer("pain_scale").notNullable();
    table.json("symptoms").notNullable();
    table.text("notes").nullable();
    table.integer("user_id").unsigned().notNullable();
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function (knex) {
  await knex.schema.dropTable("symptom_journal");
};
