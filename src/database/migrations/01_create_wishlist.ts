import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('wishlist', table => {
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.integer('id').primary();
    table.string('title').notNullable();
    table.string('imgSRC').notNullable();
    table.string('productURL').notNullable();
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('products');
}