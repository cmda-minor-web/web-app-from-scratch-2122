import { $ } from './ui.js'

export function state(current) {
  const loader = $('div.loader')
  current === 'loading'
    ? loader.classList.add('loading')
    : loader.classList.remove('loading')
}
