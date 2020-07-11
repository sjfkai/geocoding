import jsonp from 'jsonp'

export function sleep(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, timeout);
  })
}

export  function jsonpPromise(url, opts) {
  return new Promise((resolve, reject) => {
    jsonp(url, opts, (err, data) => {
      if(err) {
        return reject(err)
      }
      return resolve(data)
    })
  })
}
