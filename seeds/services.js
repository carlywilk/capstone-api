/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

// Service Types:
// Primary Care
// Sexual Health
// Gender & Transition-Related Care
// Mental Health & Wellbeing
// Indigenous Health & Non-Western Medicine

exports.seed = async function(knex) {
  await knex('services').del() // Deletes ALL existing entries
  await knex('services').insert([
    {
      id: 1,
      resource_id: 1, // WCH
      service_type: "Primary Care"
    },
    {
      id: 2,
      resource_id: 1, // WCH
      service_type: "Gender & Transition-Related Care"
    },
    {
      id: 3,
      resource_id: 1, // WCH
      service_type: "Sexual Health"
    },
    {
      id: 4,
      resource_id: 1, // WCH
      service_type: "Mental Health & Wellbeing"
    },
    {
      id: 5,
      resource_id: 1, // WCH
      service_type: "Indigenous Health & Non-Western Medicine"
    },
    // ...
  ]);
};
