export default function makeRemoveDeveloperApi ({ removeDeveloperService }) {
  return async function removeDeveloper (request) {
    const headers = {
      'Content-Type': 'application/json'
    }
    const developerId = request.params.id
    try {
      const isRemoved = await removeDeveloperService(developerId)
      var removedState = 'removed'
      var statusCode = 200
      if (!isRemoved) {
        removedState = 'Could not be removed'
        statusCode = 400
      }
      return {
        headers: headers,
        statusCode: statusCode,
        body: {
          id: developerId,
          state: removedState
        }
      }
    } catch (e) {
      return {
        headers: headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}
