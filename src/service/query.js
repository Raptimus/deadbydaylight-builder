import axios from 'axios'

export const query = async ({ url, method, headers = {}, data = {}, param = {} }) => {
  try {
    const response = await axios({
      url,
      method,
      headers,
      data,
      param
    })

    return response.data
  } catch (e) {
    console.error('Request failed', e)
  }
}
