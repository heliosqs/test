// A function that converts the model representation of a Mongo database to the current domain model (entity)
const _singleInstanceSerializer = (developer) => {
  return {
    id: developer.id,
    completeName: developer.completeName,
    knownTechnologies: developer.knownTechnologies,
    githubUrl: developer.githubUrl
  }
}

const serializer = (data) => {
  if (!data) {
    return null
  }
  if (Array.isArray(data)) {
    return data.map(_singleInstanceSerializer)
  }
  return _singleInstanceSerializer(data)
}

module.exports = serializer
