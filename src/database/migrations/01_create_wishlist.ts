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
    table.boolean('wish').notNullable();
    table.integer('imgID').notNullable();
    table.string('imgSRC').notNullable();
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('products');
}