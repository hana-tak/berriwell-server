/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      created_at: knex.fn.now(),
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      created_at: knex.fn.now(),
    },
    {
      id: 3,
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      created_at: knex.fn.now(),
    },
    {
      id: 4,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      created_at: knex.fn.now(),
    },
    {
      id: 5,
      name: "Sarah Davis",
      email: "sarah.davis@example.com",
      created_at: knex.fn.now(),
    },
  ]);
};
