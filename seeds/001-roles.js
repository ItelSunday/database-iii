
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('roles')
  .truncate() //remove .del() channge to truncate()
  //this means delete all the records and reset the IDs on the table > .then
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        { name: 'TA' },
        { name: 'Student' },
        { name: 'Staff' },
      ]);
    });
};
