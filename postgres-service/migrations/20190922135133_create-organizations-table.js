
module.exports.up = function(knex) {
    return knex.schema.createTable('organizations', function (table) {
        table.uuid('id').primary('pk_organization_id');
        table.uuid('user_id').unsigned();
        table.foreign('user_id').references('id', 'fk_user_id').inTable('users');
        table.string('name');
    });
};

module.exports.down = function(knex) {}
