const Knex = require('knex')
const { Model } = require('objection')
const connection = require('../../../knexfile')

const knexConnection = Knex(connection)

Model.knex(knexConnection)

class Company extends Model {
  static get tableName() {
    return 'companies'
  }
  
  static get relationMappings() {
    return {
      company: {
        relation: Model.BelongsToOneRelation,
        modelClass: Company,
        join: {
          from: 'companies.owner_id',
          to: 'users.id'
        }
      }
    }
  }
}

module.exports = { Company }
