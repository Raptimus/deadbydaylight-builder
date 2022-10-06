import axios from 'axios'

export const query = async ({ url, method, headers = {}, data = {}, param = {} }) => {
  try {
    const result = await axios({
      url,
      method,
      headers,
      data,
      param
    })

    return result.data
  } catch (e) {
    console.error('Request failed', e)
  }
}
