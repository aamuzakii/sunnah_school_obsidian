import axios from 'axios'
import constant from '../constant'

// this is sample function for call the API
// for post and other method please se the axios documentation
export const getData = async (): Promise<any> => {
  try {
    const getData = await axios.get(`${constant.BASE_URL}/xxx`)
    return getData.data
  } catch (error) {
    // eslint-disable-next-line no-console
    // console.log('error.message', error.message)
    return 'notFound'
  }
}
