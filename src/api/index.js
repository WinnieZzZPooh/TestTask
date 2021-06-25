import axios from 'axios'

const apiUrl = 'https://run.mocky.io/v3/'
/**
 * Производим запрос к методу API
 * @param  {String} action      Метод API
 * @param  {Object} params      параметры запроса
 * @param  {String} root        [description]

 * @return {Promise}            промис с выполнением запроса
 */
export function request (action, params = {}, root= null) {
  const url = apiUrl + action
  return axios.post(url, params, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      let data = response.data
      return root ? data[root] : data
    })
    .catch(error => {
      error.handled = false
      throw error
    })
}

export default {
  getTasks () {
    return request('c0bd29f7-9ed9-43cd-b6d4-c4ad525b9549', {}, 'list')
  }
}
