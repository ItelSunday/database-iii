// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/rolex.db3', // To add table inside
  },
  useNullAsDefault: true, // needed for sqlite
},
};

// Knex, to find the development option, it looks for default
// unless you pass in different development