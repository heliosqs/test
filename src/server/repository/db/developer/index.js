import mongoose from 'mongoose'
import DeveloperModel from './model'
import serializer from './serialize'
export default class DeveloperRepository {
  constructor (logger, config) {
    mongoose.connect(config.mongoBaseUrl + '/developer', { useNewUrlParser: true })
    this.connection = mongoose.connection.once('open', function () {
      logger.debug('Successful connection to the database.')
    }).on('error', function (_) {
      logger.error('Error connecting to the database.')
      throw Error('Error connecting to the database.')
    }).on('disconnected', function () {
      logger.error('Disconnected from database server.')
      throw Error('Disconnected from database server.')
    })
    this.developerModel = DeveloperModel(mongoose)
  }

  async findAll () {
    return this.developerModel.find({}).then(serializer)
  }

  async existsById (id) {
    const hits = await this.developerModel.find({ id: id }).countDocuments()
    return hits > 0
  }

  async insert (developer) {
    const newDeveloper = {
      completeName: developer.completeName,
      githubUrl: developer.githubUrl,
      knownTechnologies: developer.knownTechnologies,
      id: developer.id
    }
    return this.developerModel.create(newDeveloper).then(serializer)
  }

  async remove (id) {
    return this.developerModel.findOneAndDelete({ id: id })
      .then(_ => true)
      .catch(_ => false)
  }

  async update (id, developer) {
    return this.developerModel.findOneAndUpdate({ id: id }, developer)
  }

  async deleteAll () {
    return this.developerModel.remove()
  }
}
