exports.up = function(knex, Promise) {
return knex.schema.createTable('roles', function(tbl) {
    //primary key called id, integer, auto-increment
    tbl.increments();

    tbl
    .string('name', 128)
    .notNullable()
    .unique(); // auto generates second arguement for other way writing
    tbl.timestamps(true, true);
}); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('roles');
};

// MIGRATION