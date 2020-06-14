import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import DeveloperApi from './developer'
export default class ExpressApi {
  constructor (logger, { port }, service) {
    this.logger = logger
    this.config = {}
    this.config.port = port
    this.validateConfiguration(this.config)
    // Express Configuration
    this.app = express()
    this.app.use(bodyParser.json())
    this.app.use(helmet())

    // Routes
    const developerApi = new DeveloperApi(service)
    this.app.use(developerApi.router)

    // In the event in which the user requieres a non-existing resource we provide a 'not found' message
    this.app.use(function (req, res) {
      res.status(404).send({ status: 404, msg: 'Not found!' })
    })
  }

  validateConfiguration (config) {
    // Verify that port is an integer
    if (!Number.isInteger(config.port)) {
      throw Error('The port number should be an integer.')
    }
    if (config.port < 1000 || config.port > 65535) {
      throw Error('The port number should be between 1000 and 65535 (inclusive).')
    }
  }

  listen () {
    this.app.listen(process.env.PORT || this.config.port, () => {
      this.logger.debug('Developer API is listening on port ' + this.config.port)
    })
  }
}
