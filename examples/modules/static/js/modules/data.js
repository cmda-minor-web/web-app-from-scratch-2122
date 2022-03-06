import { state } from './state.js'
import { $ } from './ui.js'

export function get(id) {
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
    .then(json => filter(json))
    .then(data => clean(data))
    .then(data => calculateTotalImgSize(data))
    .catch(err => state(err))
    .finally(() => state('loaded'))
}

function filter(json) {
  const data = json.data
  let giphies = []
  !Array.isArray(data) ? giphies.push(data) : giphies = data

  return giphies.filter(giphy => giphy.rating === 'g' )
}

function clean(data) {
  return data.map(giphy => {
    const {id, title, images} = giphy
    const size = Number(images.original.size)
    return {
      id, 
      title,
      size
    }
  })
}

function calculateTotalImgSize(data) {
  const totalSize = data.reduce((prev,curr) => {
    return (prev + curr.size)
  }, 0)

  $('footer').innerHTML = `Total image size: <strong>${totalSize} bytes</strong>`

  return data
}


