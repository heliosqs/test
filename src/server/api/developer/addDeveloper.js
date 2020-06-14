import { serializer, deserializer } from './serialize'
export default function makeAddDeveloperApi ({ addDeveloperService }) {
  return async function addDeveloper (request) {
    const headers = {
      'Content-Type': 'application/json'
    }
    const body = request.body
    try {
      const developer = await addDeveloperService(serializer(body))
      return {
        headers: headers,
        statusCode: 200,
        body: deserializer(developer)
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
