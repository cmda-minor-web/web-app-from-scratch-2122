export function loader(state) {
  const loader = document.querySelector('div.loader');
  state === 'active'
    ? loader.classList.add('loading')
    : loader.classList.remove('loading');
}
