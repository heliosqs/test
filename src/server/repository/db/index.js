import config from 'config'
import DeveloperRepository from './developer'
export default class MongoRepository {
  constructor (logger) {
    const mongoBaseUrl = config.get('developerApi.repositoryConfig.mongoBaseUrl')
    this.developerRepository = new DeveloperRepository(logger, { mongoBaseUrl: mongoBaseUrl })
  }
}
