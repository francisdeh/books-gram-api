const DEFAULT_BOOK_DESCRIPTION = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("books", table => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.text("description").defaultTo(DEFAULT_BOOK_DESCRIPTION)
    table.string("author").notNullable()
    table.timestamps(true, true)
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("books");
};
