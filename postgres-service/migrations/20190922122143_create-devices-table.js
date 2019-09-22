
module.exports.up = function(knex) {
    return knex.schema.createTable('devices', function (table) {
        table.uuid('id').primary('pk_device_id');
        table.uuid('user_id').unsigned();
        table.foreign('user_id').references('id', 'fk_user_id').inTable('users');
    });
};

module.exports.down = function(knex) {}
