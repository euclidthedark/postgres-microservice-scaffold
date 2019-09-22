
module.exports.up = function(knex) {
    return knex.schema.createTable('organizations', function (table) {
        table.uuid('id');
        table.uuid('user_id').unasigned();
        table.foreign('user_id').references('users.id');
    });
};

module.exports.down = function(knex) {}
