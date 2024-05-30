/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resources').del()
  await knex('resources').insert([
    {
      id: 1,
      resource_name: "Women's College Hospital",
      resource_address: "76 Grenville Street",
      resource_website: "https://www.womenscollegehospital.ca/",
      resource_phone: "(416) 323-6400",
      resource_email: "",
      resource_hours: "Department Dependent",
      resource_types: ["Sexual Health", "Endocrinology", "Primary Care", "Indigenous Health", "Gynecology", "Mental Health"],
      service_types: ["Gender Transition Encodrinology Care", "Mastectomy", "Chest Contouring", "Breast Augmentation", "Hysterectomy", "Bilateral Salpingo-oopherectomy", "Orchiectomy", "Scrotectomy", "Vaginoplasty", "Vulvaplasty"],
      resource_navigation_access: ["Subway", "Streetcar", "Bus", "Walking"],
      is_accessible: true,
    },
    // ...
  ]);
};
