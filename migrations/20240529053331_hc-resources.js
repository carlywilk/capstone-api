/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable("resource", (table) => {
            table.increments("id").primary();
            table.string("resource_name").notNullable();
            table.string("resource_address").notNullable();
            table.string("resource_website").notNullable();
            table.string("resource_phone").notNullable();
            table.string("resource_email").notNullable();
            table.boolean("is_accessible").notNullable();
            table.timestamp("created_at").defaultTo(knex.fn.now());
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("resource").dropTable("services");
};


// run the following command to create table
// npx knex migrate:latest


// run the following command to seed the table
// npx knex seed:run