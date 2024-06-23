/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function(knex) {
  await knex('services').del();

  // console.log("Trying to connect to database...");
  
  await knex('services').insert([
    {
      id: 1,
      resource_id: 1,
      service_type: "Primary Care"
    },
    {
      id: 2,
      resource_id: 1,
      service_type: "Gender & Transition-Related Care"
    },
    {
      id: 3,
      resource_id: 1,
      service_type: "Sexual Health"
    },
    {
      id: 4,
      resource_id: 1,
      service_type: "Mental Health & Wellbeing"
    },
    {
      id: 5,
      resource_id: 1,
      service_type: "Indigenous Health & Non-Western Medicine"
    },

    {
      id: 6,
      resource_id: 2,
      service_type: "Primary Care"
    },
    {
      id: 7,
      resource_id: 2,
      service_type: "Gender & Transition-Related Care"
    },
    {
      id: 8,
      resource_id: 2,
      service_type: "Post-Surgical Care"
    },
    {
      id: 9,
      resource_id: 2,
      service_type: "Sexual Health"
    },
    {
      id: 10,
      resource_id: 2,
      service_type: "Mental Health & Wellbeing"
    },
    {
      id: 11,
      resource_id: 2,
      service_type: "Information & Resources"
    },
    {
      id: 12,
      resource_id: 3,
      service_type: "Sexual Health"
    },
    {
      id: 13,
      resource_id: 4,
      service_type: "Pediatrics"
    },
    {
      id: 14,
      resource_id: 5,
      service_type: "Neurology"
    },
    {
      id: 15,
      resource_id: 6,
      service_type: "Indigenous Health & Non-Western Medicine"
    },
    {
      id: 16,
      resource_id: 7,
      service_type: "Mental Health & Wellbeing"
    },
    {
      id: 17,
      resource_id: 7,
      service_type: "Gender & Transition-Related Care"
    },
    {
      id: 18,
      resource_id: 8,
      service_type: "Gender & Transition-Related Care"
    },
    {
      id: 19,
      resource_id: 8,
      service_type: "Post-Surgical Care"
    },
    {
      id: 20,
      resource_id: 9,
      service_type: "Indigenous Health & Non-Western Medicine"
    },
    {
      id: 21,
      resource_id: 10,
      service_type: "Information & Resources"
    },
    {
      id: 22,
      resource_id: 11,
      service_type: "Information & Resources"
    },
    {
      id: 23,
      resource_id: 12,
      service_type: "Support Phone Line"
    },
    {
      id: 24,
      resource_id: 13,
      service_type: "Sexual Health"
    },
    {
      id: 25,
      resource_id: 13,
      service_type: "Information & Resources"
    },
    {
      id: 26,
      resource_id: 14,
      service_type: "Information & Resources"
    },
    {
      id: 27,
      resource_id: 14,
      service_type: "Support Phone Line"
    },
    {
      id: 28,
      resource_id: 15,
      service_type: "Information & Resources"
    },
    {
      id: 29,
      resource_id: 15,
      service_type: "Sexual Health"
    },
    {
      id: 30,
      resource_id: 16,
      service_type: "Virtual Care"
    },
    {
      id: 31,
      resource_id: 16,
      service_type: "Sexual Health"
    },
    {
      id: 32,
      resource_id: 16,
      service_type: "Primary Care"
    },
    {
      id: 33,
      resource_id: 16,
      service_type: "Information & Resources"
    },
    {
      id: 34,
      resource_id: 17,
      service_type: "Information & Resources"
    },
    {
      id: 35,
      resource_id: 17,
      service_type: "Primary Care"
    },
    {
      id: 36,
      resource_id: 17,
      service_type: "Sexual Health"
    },
    {
      id: 37,
      resource_id: 17,
      service_type: "Mental Health & Wellbeing"
    },
    {
      id: 38,
      resource_id: 18,
      service_type: "Gender & Transition-Related Care"
    },
    {
      id: 39,
      resource_id: 18,
      service_type: "Pediatrics"
    },
    {
      id: 40,
      resource_id: 19,
      service_type: "Sexual Health"
    },
    {
      id: 41,
      resource_id: 19,
      service_type: "Information & Resources"
    },
    {
      id: 42,
      resource_id: 19,
      service_type: "Harm Reduction"
    },
    {
      id: 43,
      resource_id: 20,
      service_type: "Harm Reduction"
    },
    {
      id: 44,
      resource_id: 21,
      service_type: "Virtual Care"
    },
    {
      id: 45,
      resource_id: 21,
      service_type: "Indigenous Health & Non-Western Medicine"
    },
    {
      id: 46,
      resource_id: 7,
      service_type: "Harm Reduction"
    },
    {
      id: 47,
      resource_id: 2,
      service_type: "Harm Reduction"
    },
    {
      id: 48,
      resource_id: 1,
      service_type: "Harm Reduction"
    },
  ]);
  // console.log("Successfully inserted services data!");
};
