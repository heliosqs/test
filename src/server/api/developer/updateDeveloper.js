import { serializer } from './serialize'
export default function updateDeveloperApi ({ updateDeveloperService }) {
  return async function updateDeveloper (request) {
    const headers = {
      'Content-Type': 'application/json'
    }
    const developerId = request.params.id
    const body = request.body
    try {
      const isRemoved = await updateDeveloperService(developerId, serializer(body))
      var removedState = 'Updated'
      var statusCode = 200
      if (!isRemoved) {
        removedState = 'Could not be updated'
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
