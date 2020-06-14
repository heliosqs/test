// A function that converts the body of a developer API request into the internal domain representation
const _singleInstanceSerializer = (developer) => {
  const newDeveloper = {
    id: developer.id,
    completeName: developer.nombres_completos,
    knownTechnologies: developer.tecnologias_conocidas,
    githubUrl: developer.link_github
  }
  return newDeveloper
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

const _singleInstanceDeserializer = (developer) => {
  return {
    id: developer.id,
    nombres_completos: developer.completeName,
    tecnologias_conocidas: developer.knownTechnologies,
    link_github: developer.githubUrl
  }
}

const deserializer = (data) => {
  if (!data) {
    return null
  }
  if (Array.isArray(data)) {
    return data.map(_singleInstanceDeserializer)
  }
  return _singleInstanceDeserializer(data)
}

module.exports = { serializer, deserializer }
