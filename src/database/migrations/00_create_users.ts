import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.integer('id').primary();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').nullable
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}