import Developer from '../../entities'
export default function updateDeveloperInterface (repository) {
  return async function updateDeveloperService (id, developerData) {
    const foundDeveloper = await repository.existsById(id)
    if (!foundDeveloper) {
      throw Error('A developer with Id: ' + id + ' does not exist.')
    }
    developerData.id = id
    const developer = new Developer(developerData)
    return repository.update(id, developer)
  }
}
