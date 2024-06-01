/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('resource').del() // Deletes ALL existing entries
  await knex('resource').insert([
    {
      id: 1,
      resource_name: "Women's College Hospital",
      resource_address: "76 Grenville Street",
      resource_website: "https://www.womenscollegehospital.ca/",
      resource_phone: "(416) 323-6400",
      resource_email: "N/A",
      is_accessible: true,
    },
    // ...
  ]);
};
