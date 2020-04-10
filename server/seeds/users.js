exports.seed = function (knex) {
  // Make this a promise
  return knex('users').del().then(() => {
    return knex('users').insert([
      {
        firstName: 'Julian',
        lastName: 'Villarreal',
        email: 'julian@ranchand.com',
        phone: '1231234567'
      },
      {
        firstName: 'Gabby',
        lastName: 'Villarreal',
        email: 'gabby@ranchand.com',
        phone: '5127478992'
      },
      {
        firstName: 'Keith',
        lastName: 'Booher',
        email: 'keith@ranchand.com',
        phone: '5123458794'
      }
    ]);
  });
};
