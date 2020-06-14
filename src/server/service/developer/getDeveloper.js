export default function getDeveloperInterface (dataAccess) {
  return async function getDeveloperService () {
    return dataAccess.findAll()
  }
}
