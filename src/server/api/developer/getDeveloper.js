import { deserializer } from './serialize'
export default function makeGetDeveloper ({ getDeveloperService }) {
  return async function getDeveloper (_) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const developers = await getDeveloperService()
      return {
        headers,
        statusCode: 200,
        body: deserializer(developers)
      }
    } catch (e) {
      return {
        headers,
        statusCode: 400,
        body: {
          error: e
        }
      }
    }
  }
}
