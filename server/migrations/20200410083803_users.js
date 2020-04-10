exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('users', table => {
      table.increments('id').primary()
      table.string('firstName')
      table.string('lastName')
      table.string('email')
      table.string('phone')
    })
  ])
}

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
}
