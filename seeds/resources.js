/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // await knex('resource').del(); 
  // await knex('resource').insert([
    try {
      // Start a transaction
      await knex.transaction(async (trx) => {
        // Delete or update dependent records first
        // Example: Delete all services records referencing resources before seeding
        await trx('services').whereExists(function() {
          this.select('*').from('resource').whereRaw('services.resource_id = resource.id');
        }).del();
  
        // Clear existing resource records
        await trx('resource').del();
  
        // Insert new resource records
        await trx('resource').insert([
          {
          id: 1,
          resource_name: "Women's College Hospital",
          resource_address: "76 Grenville Street",
          resource_website: "https://www.womenscollegehospital.ca/",
          resource_phone: "(416) 323-6400",
          resource_email: "N/A",
          is_accessible: true,
        },
        {
          id: 2,
          resource_name: "Sherbourne Health",
          resource_address: "333 Sherbourne Street",
          resource_website: "https://sherbourne.on.ca/",
          resource_phone: "(416) 324-4100",
          resource_email: "info@sherbourne.on.ca",
          is_accessible: true,
        },
        {
          id: 3,
          resource_name: "Hassle Free Clinic",
          resource_address: "2nd Floor, 66 Gerrard Street East",
          resource_website: "https://www.hasslefreeclinic.org/",
          resource_phone: "(416) 922-0566",
          resource_email: "admin@hasslefreeclinic.org",
          is_accessible: true,
        },
        {
          id: 4,
          resource_name: "Thrive Kids Clinic",
          resource_address: "2686 Danforth Avenue",
          resource_website: "https://www.thrivekidsclinic.ca/",
          resource_phone: "(416) 849-2260",
          resource_email: "info@thrivekidsclinic.ca",
          is_accessible: true,
        },
        {
          id: 5,
          resource_name: "2SLGBTQIA+ Neurology Clinic",
          resource_address: "West Wing, 5th Floor, 399 Bathurst Street",
          resource_website: "https://www.uhn.ca/Krembil/Clinics/2SLGBTQIA_Neurology_Clinic",
          resource_phone: "(416) 603-5232",
          resource_email: "N/A",
          is_accessible: true,
        },
        {
          id: 6,
          resource_name: "Anishnawbe Health Toronto",
          resource_address: "179 Gerrard Street East",
          resource_website: "https://aht.ca/",
          resource_phone: "(416) 920-2605",
          resource_email: "N/A",
          is_accessible: true,
        },
        {
          id: 7,
          resource_name: "Centre for Addiction and Mental Health",
          resource_address: "4th floor, 60 White Squirrel Way",
          resource_website: "https://www.camh.ca/",
          resource_phone: "(416) 535-8501, ext. 2",
          resource_email: "N/A",
          is_accessible: true,
        },
        {
          id: 8,
          resource_name: "Toronto Plastic Surgery",
          resource_address: "Suite 410, 790 Bay Street",
          resource_website: "https://www.torontoplasticsurgery.com/surgical/transition-procedures/",
          resource_phone: "(416) 323-6336",
          resource_email: "N/A",
          is_accessible: true,
        },
        {
          id: 9,
          resource_name: "2-Spirited People of the 1st Nations",
          resource_address: "Unit 105, 145 Front St. East",
          resource_website: "https://2spirits.org/",
          resource_phone: "(416) 944-9300",
          resource_email: "info@2spirits.org",
          is_accessible: true,
        },
        {
          id: 10,
          resource_name: "THE 519",
          resource_address: "519 Church Street",
          resource_website: "https://www.the519.org/",
          resource_phone: "(416) 392-6874",
          resource_email: "Info@The519.org",
          is_accessible: true,
        },
        {
          id: 11,
          resource_name: "Rainbow Health Ontario",
          resource_address: "333 Sherbourne Street",
          resource_website: "https://www.rainbowhealthontario.ca/",
          resource_phone: "(416) 324-4100",
          resource_email: "info@rainbowhealthontario.ca",
          is_accessible: true,
        },
        {
          id: 12,
          resource_name: "Toronto Pflag",
          resource_address: "200 Wolverleigh Boulevard",
          resource_website: "https://www.torontopflag.org/",
          resource_phone: "(416) 406-1727",
          resource_email: "office@torontopflag.org",
          is_accessible: true,
        },
        {
          id: 13,
          resource_name: "Planned Parenthood Toronto",
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
          resource_name: "Asian Community AIDS Services (ACAS)",
          resource_address: "Suite 410, 260 Spadina Ave",
          resource_website: "https://acas.org/",
          resource_phone: "(416) 963-4300",
          resource_email: "info@acas.org",
          is_accessible: false,
        },
        {
          id: 16,
          resource_name: "TeleTest",
          resource_address: "N/A",
          resource_website: "https://teletest.ca/",
          resource_phone: "N/A", 
          resource_email: "info@teletest.ca",
          is_accessible: true,
        },
        {
          id: 17,
          resource_name: "Casey House",
          resource_address: "119 Isabella Street",
          resource_website: "https://caseyhouse.ca/",
          resource_phone: "(416) 962-7600", 
          resource_email: "info@caseyhouse.ca",
          is_accessible: true,
        },
        {
          id: 18,
          resource_name: "Transgender Youth Clinic",
          resource_address: "170 Elizabeth Street",
          resource_website: "https://www.sickkids.ca/en/care-services/clinics/transgender-youth-clinic/",
          resource_phone: "(416) 813-5804", 
          resource_email: "N/A",
          is_accessible: true,
        },
        {
          id: 19,
          resource_name: "Black CAP",
          resource_address: "20 Victoria Street",
          resource_website: "https://blackcap.ca/",
          resource_phone: "(416) 977-9955", 
          resource_email: "info@black-cap.com",
          is_accessible: true,
        },
        {
          id: 20,
          resource_name: "Breakaway: Pieces to Pathways Program",
          resource_address: "21 Strickland Avenue",
          resource_website: "https://breakawaycs.ca/programs/pieces-to-pathways/",
          resource_phone: "(416) 537-9346", 
          resource_email: "p2pinfo@breakawaycs.ca",
          is_accessible: true,
        },
        {
          id: 21,
          resource_name: "Ontario Telemedicine Network",
          resource_address: "N/A",
          resource_website: "https://otn.ca/",
          resource_phone: "(416) 446-4110", 
          resource_email: "N/A",
          is_accessible: true,
        },
  ]);
  await trx.commit();
      console.log('Seeding completed successfully.');
    });
  } catch (error) {
    // Rollback the transaction if there's an error
    console.error('Error seeding database:', error);
  } finally {
    // Ensure the database connection is properly closed
    await knex.destroy();
  }
};
