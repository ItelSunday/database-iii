exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(tbl) {
        //primary key called id, integer, auto-increment
        tbl.increments();

    tbl
      .string('name', 128)
      .notNullable()

    // foreign key
    tbl
      .integer('role_id') // the column name in this table (users)
      .unsigned() //referencing to another table
      .references('id') // primary key in the related (parent) table (roles)
      .inTable('roles') 
      .onDelete('CASCADE') //opt to set.
      .onUpdate('CASCADE'); 

        
        tbl.timestamps(true, true);
    }); 
    };
    
    exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('roles');
    };
    
    // MIGRATION