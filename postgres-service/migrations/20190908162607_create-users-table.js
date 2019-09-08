module.exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
        table.uuid('id');
        table.jsonb('attributes');
    });
}

module.exports.down = function(knex) {}