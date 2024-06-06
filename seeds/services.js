/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

// Service Types:
// Primary Care
// Sexual Health
// Gender & Transition-Related Care
// Post-Surgical Care
// Mental Health & Wellbeing
// Indigenous Health & Non-Western Medicine
// Information & Resources
// Pediatrics

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

    {
      id: 6,
      resource_id: 2, // Sherbourne
      service_type: "Primary Care"
    },
    {
      id: 7,
      resource_id: 2, // Sherbourne
      service_type: "Gender & Transition-Related Care"
    },
    {
      id: 8,
      resource_id: 2, // Sherbourne
      service_type: "Post-Surgical Care"
    },
    {
      id: 9,
      resource_id: 2, // Sherbourne
      service_type: "Sexual Health"
    },
    {
      id: 10,
      resource_id: 2, // Sherbourne
      service_type: "Mental Health & Wellbeing"
    },
    {
      id: 11,
      resource_id: 2, // Sherbourne
      service_type: "Information & Resources"
    },
    {
      id: 12,
      resource_id: 3, // Hassle Free Clinic
      service_type: "Sexual Health"
    },
    {
      id: 13,
      resource_id: 4, // Thrive Kids Clinic
      service_type: "Pediatrics"
    },
    {
      id: 14,
      resource_id: 5, // 2SLGBTQIA+ Neurology Clinic
      service_type: "Neurology"
    },
    {
      id: 15,
      resource_id: 6, // Anishnawbe Health Toronto
      service_type: "Indigenous Health & Non-Western Medicine"
    },
    {
      id: 16,
      resource_id: 7, // CAMH
      service_type: "Mental Health & Wellbeing"
    },
    {
      id: 17,
      resource_id: 7, // CAMH
      service_type: "Gender & Transition-Related Care"
    },
    {
      id: 18,
      resource_id: 8, // Toronto Plastic Surgery
      service_type: "Gender & Transition-Related Care"
    },
    {
      id: 19,
      resource_id: 8, // Toronto Plastic Surgery
      service_type: "Post-Surgical Care"
    },
    {
      id: 20,
      resource_id: 9, // 2-Spirited People of the 1st Nations
      service_type: "Indigenous Health & Non-Western Medicine"
    },
    {
      id: 21,
      resource_id: 10, // THE 519
      service_type: "Information & Resources"
    },
    {
      id: 22,
      resource_id: 11, // Rainbow Health Ontario
      service_type: "Information & Resources"
    },
    {
      id: 23,
      resource_id: 12, // Toronto Pflag
      service_type: "Support Phone Line"
    },
    {
      id: 24,
      resource_id: 13, // Planned Parenthood Toronto
      service_type: "Sexual Health"
    },
    {
      id: 25,
      resource_id: 13, // Planned Parenthood Toronto
      service_type: "Information & Resources"
    },
    {
      id: 26,
      resource_id: 14, // LGBT Youthline
      service_type: "Information & Resources"
    },
    {
      id: 27,
      resource_id: 14, // LGBT Youthline
      service_type: "Support Phone Line"
    },
    {
      id: 28,
      resource_id: 15, // Asian Community AIDS Services (ACAS)
      service_type: "Information & Resources"
    },
    {
      id: 29,
      resource_id: 15, // Asian Community AIDS Services (ACAS)
      service_type: "Sexual Health"
    },
    // ...
  ]);
};
