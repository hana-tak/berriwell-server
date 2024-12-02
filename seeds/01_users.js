/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      name: "Hana",
      email: "hana@example.com",
      created_at: knex.fn.now(),
    },
    {
      id: 2,
      name: "Sofia",
      email: "sofia@example.com",
      created_at: knex.fn.now(),
    },
    {
      id: 3,
      name: "Juliet",
      email: "juliet@example.com",
      created_at: knex.fn.now(),
    },
    {
      id: 4,
      name: "Brainstation",
      email: "brainstation@example.com",
      created_at: knex.fn.now(),
    },
  ]);
};
