const Knex = require('knex')
const { Model } = require('objection')
const connection = require('../../../knexfile')

const knexConnection = Knex(connection)

Model.knex(knexConnection)

class User extends Model {
  static get tableName() {
    return 'users'
  }
  
  static get relationMappings() {
    return {
      user: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          to: 'companies.owner_id'
        }
        
      }
    }
  }
}

module.exports = { User }
