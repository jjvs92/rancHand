exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('companies', table => {
      table.increments('id').primary()
      table.string('name')
      table.string('location')
      table.integer('owner_id').references('users.id')
    })
  ])
}

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('companies')
  ])
}
