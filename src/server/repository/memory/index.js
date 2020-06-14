import DeveloperRepository from './developer'
export default class MemoryRepository {
  constructor () {
    this.developerRepository = new DeveloperRepository()
  }
}
