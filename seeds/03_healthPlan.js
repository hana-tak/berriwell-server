/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
    await knex('health_plan').del();
    await knex('health_plan').insert([
      {
        id: 1,
        user_id: 1,
        tasks: JSON.stringify([
          "Take vitamin D supplement daily",
          "Drink 8 glasses of water",
          "Avoid processed sugar"
        ]),
        last_updated: knex.fn.now()
      },
      {
        id: 2,
        user_id: 2,
        tasks: JSON.stringify([
          "Perform 30 minutes of yoga every morning",
          "Include more leafy greens in meals",
          "Limit caffeine to 1 cup per day"
        ]),
        last_updated: knex.fn.now()
      },
      {
        id: 3,
        user_id: 3,
        tasks: JSON.stringify([
          "Take omega-3 supplements",
          "Exercise 3 times a week",
          "Use a humidifier at night"
        ]),
        last_updated: knex.fn.now()
      },
      {
        id: 4,
        user_id: 4,
        tasks: JSON.stringify([
          "Avoid dairy products",
          "Take a probiotic supplement daily",
          "Increase daily fiber intake"
        ]),
        last_updated: knex.fn.now()
      },
      {
        id: 5,
        user_id: 5,
        tasks: JSON.stringify([
          "Get 7-8 hours of sleep per night",
          "Reduce screen time before bed",
          "Eat a high-protein breakfast"
        ]),
        last_updated: knex.fn.now()
      }
    ]);
  };