const axios = require('axios')

const mountObjectError = (err) => {
  if (!err) return null
  return {
    httpCode: err.response.status,
    message: err.message,
    response: err.response.data
  }
}

const request = (retry = 3, timeout = 1000, config) => {
  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        return resolve(response)
      })
      .catch(err => {
        if (retry === 1) {
          let error = mountObjectError(err)
          return reject(`retry times exceeded the maximum amount especified, exited with a error, ${JSON.stringify(error)}`)
        }
        setTimeout(() => request(retry - 1, timeout, config).then(resolve, reject), timeout)
      })
  })
}

module.exports = request