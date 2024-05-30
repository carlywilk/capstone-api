/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable("services", (table) => {
            table.increments("id").primary(); // i want this id to match the id of the resource table; so i can reference the id and know what services that specific resource provides 
            table.string("resource_name").notNullable(); // same as above, i want to name to match the id in the resources table
            table.string("resource_type").notNullable(); // can this be an array? or do I have to list each category of service type and then have associated boolean values that say either true or false based on if the resource does provide that service or not?
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("services");
};
