/*** Handle routes -> refactor into module later ***/
const sections = document.querySelectorAll('section');

routie({
  //#giphy/425367
  'giphy/:id': id => {
    console.log(id);
  },
  network: () => {
    updateUI('network');
  },
  console: () => {
    updateUI('console');
  },
  debugger: () => {
    updateUI('debugger');
  },
  errors: () => {
    updateUI('errors');
  }
});

// update UI from route (hashchange)
function updateUI(route) {
  sections.forEach(section => {
    section.classList.remove('active');
  });
  activeSection = document.querySelector(`[data-route=${route}]`);
  console.log(activeSection);
  activeSection.classList.add('active');
}

/*** Fetching data -> refactor into module later ***/
const main = document.querySelector('main');
const endpoint = 'https://api.giphy.com/v1/gifs/search?q=';
const topic = 'developer';
const key = 'jhcL7QPGb2ObrOHw1dEJuL9w2j71zfEk';
const limit = 1;
const url = `${endpoint}${topic}&api_key=${key}&limit=${limit}`;

fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    render(data.data);
  })
  .catch(err => {
    console.log(err);
  });

// render data
function render(data) {
  data.forEach((item, i) => {
    const html = `
            <article>
              <h2>${item.title}</h2>
              <a href="#giphy/547839088">
                <img src="https://media.giphy.com/media/${item.id}/giphy.gif">
              </a>

            </article>
          `;
    main.insertAdjacentHTML('beforeend', html);
  });
}

/*** Transparency templating engine -> refactor into module later ***/

const footer = document.querySelector('footer');
const data = {
  title: 'Developer Tools',
  text: '... are totally wicked 🦄'
};

setTimeout(renderTemplate(footer, data), 1000);

// Transparency
function renderTemplate(element, data) {
  return () => {
    Transparency.render(element, data);
  };
}
