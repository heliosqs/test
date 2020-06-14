global.developers = new Map()
export default class DeveloperRepository {
  async findAll () {
    return Array.from(global.developers.values())
  }

  async insert (developer) {
    global.developers.set(developer.id, developer)
    return developer
  }

  async findById (id) {
    return global.developers.get(id)
  }

  async existsById (id) {
    return global.developers.has(id)
  }

  async remove (id) {
    return global.developers.delete(id)
  }

  async update (id, developer) {
    return global.developers.set(id, developer)
  }
}
