import ExpressApi from './api'
import config from 'config'
import log4js from 'log4js'
import MemoryRepository from './repository/memory'
import MongoRepository from './repository/db'
import CoreService from './service'

// Environment Configuration
const serverConfig = config.get('developerApi.serverConfig')
const repositoryConfig = config.get('developerApi.repositoryConfig')
var isMemoryRepository = repositoryConfig.isMemoryRepository

// Log level configuration
const logger = log4js.getLogger()
if (process.env.NODE_ENV === 'production') {
  logger.level = 'info'
} else {
  logger.level = 'debug'
}
// Chooses the repository based on the configuration file on @root/config/[env].json
// In this case [env] refers to the node environment, if there is no NODE_ENV then default.json is chosen.
// If isMemoryReport is true the memory repository is loaded
var repository = {}
if (isMemoryRepository) {
  repository = new MemoryRepository()
} else {
  repository = new MongoRepository(logger)
}

// Service core configuration using the configured repository
const service = new CoreService(repository)

// Start the API
try {
  const api = new ExpressApi(logger, serverConfig, service)
  api.listen()
} catch (error) {
  logger.fatal(error.message)
}
