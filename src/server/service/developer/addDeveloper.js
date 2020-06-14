import Developer from '../../entities'
import { v4 as uuidv4 } from 'uuid'
function createId (repository) {
  var newId = uuidv4()
  while (!repository.existsById(newId)) {
    newId = uuidv4()
  }
  return newId
}
export default function addDeveloperInterface (repository) {
  return async function addDeveloperService (developerData) {
    var newId = createId(repository)
    developerData.id = newId
    const developer = new Developer(developerData)
    return repository.insert(developer)
  }
}
