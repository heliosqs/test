export default function removeDeveloperInterface (repository) {
  return async function removeDeveloperService (id) {
    const foundDeveloper = await repository.existsById(id)
    if (!foundDeveloper) {
      throw Error('A developer with Id: ' + id + ' does not exist.')
    }
    return repository.remove(id)
  }
}
