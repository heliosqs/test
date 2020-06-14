import addDeveloperInterface from './developer/addDeveloper'
import getDeveloperInterface from './developer/getDeveloper'
import removeDeveloperInterface from './developer/removeDeveloper'
import updateDeveloperInterface from './developer/updateDeveloper'

// Service Configuration for the API
export default class Service {
  constructor (repository) {
    this.repository = repository
    this.addDeveloperService = addDeveloperInterface(this.repository.developerRepository)
    this.getDeveloperService = getDeveloperInterface(this.repository.developerRepository)
    this.removeDeveloperService = removeDeveloperInterface(this.repository.developerRepository)
    this.updateDeveloperService = updateDeveloperInterface(this.repository.developerRepository)
  }
}
