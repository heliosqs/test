export default function DeveloperModel (mongoose) {
  const Schema = mongoose.Schema
  const developerSchema = new Schema({
    id: String,
    completeName: String,
    githubUrl: String,
    knownTechnologies: Array
  })

  const DeveloperModel = mongoose.model('Developer', developerSchema)
  return DeveloperModel
}
