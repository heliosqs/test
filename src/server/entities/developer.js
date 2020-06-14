const validUrl = require('valid-url')
export default class Developer {
  constructor ({ id, completeName, githubUrl, knownTechnologies = [] }) {
    if (!id) {
      throw new Error('Developer Id was not automatically generated!')
    }
    if (!completeName) {
      throw new Error('Developer name was not specified.')
    }
    if (!githubUrl) {
      throw new Error('Developer\'s github was not specified.')
    }
    if (!Array.isArray(knownTechnologies)) {
      throw new Error('Known technologies is not a list.')
    }
    if (!validUrl.isUri(githubUrl)) {
      throw new Error('The specified URL is not valid.')
    }
    this.id = id
    this.completeName = completeName
    this.githubUrl = githubUrl
    this.knownTechnologies = knownTechnologies
  }
}
