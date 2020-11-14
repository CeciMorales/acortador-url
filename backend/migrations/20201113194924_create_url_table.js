
exports.up = function(knex) {
    return knex.schema
    .createTable('url', (table) => {
      table.increments('id');
      table.string('original', 512).notNullable();
      table.string('token', 512).notNullable();
      table.string('generated', 512).notNullable();
      table.float('counter');
      table.timestamps(true, true);
    });
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('url');
  
};
