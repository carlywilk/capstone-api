/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('resource').del() // Deletes ALL existing entries
  await knex('resource').insert([
    {
      id: 1,
      resource_name: "Women's College Hospital", // add lat and lng
      resource_address: "76 Grenville Street",
      resource_website: "https://www.womenscollegehospital.ca/",
      resource_phone: "(416) 323-6400",
      resource_email: "N/A",
      is_accessible: true,
    },
    {
      id: 2,
      resource_name: "Sherbourne Health", // add lat and lng
      resource_address: "333 Sherbourne Street",
      resource_website: "https://sherbourne.on.ca/",
      resource_phone: "(416) 324-4100",
      resource_email: "info@sherbourne.on.ca",
      is_accessible: true,
    },
    {
      id: 3,
      resource_name: "Hassle Free Clinic", // add lat and lng 43.66015563568564, -79.37878054544127
      resource_address: "2nd Floor, 66 Gerrard Street East",
      resource_website: "https://www.hasslefreeclinic.org/",
      resource_phone: "(416) 922-0566",
      resource_email: "admin@hasslefreeclinic.org",
      is_accessible: true,
    },
    {
      id: 4,
      resource_name: "Thrive Kids Clinic", // add lat and lng 43.689176099169295, -79.29886194543997
      resource_address: "2686 Danforth Avenue",
      resource_website: "https://www.thrivekidsclinic.ca/",
      resource_phone: "(416) 849-2260",
      resource_email: "info@thrivekidsclinic.ca",
      is_accessible: true,
    },
    {
      id: 5,
      resource_name: "2SLGBTQIA+ Neurology Clinic", // add lat and lng 43.65377124428925, -79.40547702026059
      resource_address: "West Wing, 5th Floor, 399 Bathurst Street",
      resource_website: "https://www.uhn.ca/Krembil/Clinics/2SLGBTQIA_Neurology_Clinic",
      resource_phone: "(416) 603-5232",
      resource_email: "N/A",
      is_accessible: true,
    },
    {
      id: 6,
      resource_name: "Anishnawbe Health Toronto", // add lat and lng 43.66209018250031, -79.37318341076121
      resource_address: "179 Gerrard Street East",
      resource_website: "https://aht.ca/",
      resource_phone: "(416) 920-2605",
      resource_email: "N/A",
      is_accessible: true,
    },
    {
      id: 7,
      resource_name: "Centre for Addiction and Mental Health", // add lat and lng 43.64310049205079, -79.42116537608366
      resource_address: "4th floor, 60 White Squirrel Way",
      resource_website: "https://www.camh.ca/",
      resource_phone: "(416) 535-8501, ext. 2",
      resource_email: "N/A",
      is_accessible: true,
    },
    {
      id: 8,
      resource_name: "Toronto Plastic Surgery", // add lat and lng 43.660621683748666, -79.3860264337501
      resource_address: "Suite 410, 790 Bay Street",
      resource_website: "https://www.torontoplasticsurgery.com/surgical/transition-procedures/",
      resource_phone: "(416) 323-6336",
      resource_email: "N/A",
      is_accessible: true,
    },
    {
      id: 9,
      resource_name: "2-Spirited People of the 1st Nations", // add lat and lng 43.65006404774825, -79.36939147427779
      resource_address: "Unit 105, 145 Front St. East",
      resource_website: "https://2spirits.org/",
      resource_phone: "(416) 944-9300",
      resource_email: "info@2spirits.org",
      is_accessible: true,
    },
    {
      id: 10,
      resource_name: "THE 519", // add lat and lng 43.66667398942517, -79.38107104544095
      resource_address: "519 Church Street",
      resource_website: "https://www.the519.org/",
      resource_phone: "(416) 392-6874",
      resource_email: "Info@The519.org",
      is_accessible: true,
    },
    {
      id: 11,
      resource_name: "Rainbow Health Ontario", // add lat and lng 43.662478115873796, -79.37211763009694
      resource_address: "333 Sherbourne Street",
      resource_website: "https://www.rainbowhealthontario.ca/",
      resource_phone: "(416) 324-4100",
      resource_email: "info@rainbowhealthontario.ca",
      is_accessible: true,
    },
    {
      id: 12,
      resource_name: "Toronto Pflag", // add lat and lng 43.6857116140509, -79.32251557427611
      resource_address: "200 Wolverleigh Boulevard",
      resource_website: "https://www.torontopflag.org/",
      resource_phone: "(416) 406-1727",
      resource_email: "office@torontopflag.org",
      is_accessible: true,
    },
    {
      id: 13,
      resource_name: "Planned Parenthood Toronto", // add lat and lng 43.66994287413304, -79.39749796078503
      resource_address: "36B Prince Arthur Avenue",
      resource_website: "https://ppt.on.ca/",
      resource_phone: "(416) 961-0113",
      resource_email: "ppt@ppt.on.ca",
      is_accessible: true,
    },
    {
      id: 14,
      resource_name: "LGBT Youthline",
      resource_address: "N/A",
      resource_website: "https://www.youthline.ca/",
      resource_phone: "(647) 694-4275",
      resource_email: "helpline@youthline.ca",
      is_accessible: true,
    },
    {
      id: 15,
      resource_name: "Asian Community AIDS Services (ACAS)", // add lat and lng 43.652117615488805, -79.39821304544161
      resource_address: "Suite 410, 260 Spadina Ave",
      resource_website: "https://acas.org/",
      resource_phone: "(416) 963-4300",
      resource_email: "info@acas.org",
      is_accessible: false,
    },
    // ...
  ]);
};
