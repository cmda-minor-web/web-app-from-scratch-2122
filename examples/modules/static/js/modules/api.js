import { state } from './state.js'

export function getData(id) {
  const endpoint = 'https://api.giphy.com/v1/gifs/'
  const query = 'search?q='
  const topic = 'kitten'
  const key = 'jhcL7QPGb2ObrOHw1dEJuL9w2j71zfEk'
  const limit = 25
  let url = ''

  id  
    ? url = `${endpoint}${id}?api_key=${key}`
    : url = `${endpoint}${query}${topic}&api_key=${key}&limit=${limit}`

  state('loading')

  return fetch(url)
    .then(response => response.json())
    .then(data => clean(data.data))
    .then(data => store(data))
    .catch(err => {
      state(err)
    })
    .finally(()=> {
      state('loaded')
    })
}

function clean(data) {
  // asynchronously clean data before returning, fake it with timeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1)
  })
}

function store(data) {
  // asynchronously store data before returning, fake it with timeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1)
  })
}
