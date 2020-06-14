import makeGetDeveloper from './getDeveloper'
import makeAddDeveloper from './addDeveloper'
import makeRemoveDeveloper from './removeDeveloper'
import makeUpdateDeveloper from './updateDeveloper'
import express from 'express'
export default class DeveloperApi {
  constructor (developerService) {
    this.router = express.Router()
    var addDeveloperService = developerService.addDeveloperService
    var getDeveloperService = developerService.getDeveloperService
    var updateDeveloperService = developerService.updateDeveloperService
    var removeDeveloperService = developerService.removeDeveloperService
    const getDevelopers = makeGetDeveloper({ getDeveloperService })
    const addDevelopers = makeAddDeveloper({ addDeveloperService })
    const updateDevelopers = makeUpdateDeveloper({ updateDeveloperService })
    const removeDevelopers = makeRemoveDeveloper({ removeDeveloperService })
    // Routes
    this.router.get('/developers', (req, res) => this.handleResponse(getDevelopers, req, res))
    this.router.post('/developers', (req, res) => this.handleResponse(addDevelopers, req, res))
    this.router.put('/developers/:id', (req, res) => this.handleResponse(updateDevelopers, req, res))
    this.router.delete('/developers/:id', (req, res) => this.handleResponse(removeDevelopers, req, res))
  }

  handleResponse (service, req, res) {
    service(req)
      .then(response => {
        res.set(response.headers)
        res.type('json')
        res.status(response.statusCode).send(response.body)
      })
      .catch(error => {
        this.logger.error(error)
        res.status(500).send('Server Error.')
      })
  }
}
