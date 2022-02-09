const knopBio = document.querySelector('#bio');
const knopFoto = document.querySelector('#foto');
const knopHobby = document.querySelector('#hobby');
const bio = document.querySelector('p');
const foto = document.querySelector('img');
const hobby = document.querySelector('main h1');

const show = (waarde) => {
    if (waarde === 1) {
        bio.classList = ("");
        hobby.classList = ("");
        foto.classList = ("");
        setTimeout(function () {
            bio.classList.add("show_anim");
        }, 0);
    }
    if (waarde === 2) {
        foto.classList = ("");
        bio.classList = ("");
        hobby.classList = ("");
        setTimeout(function () {
            foto.classList.add("show_anim");
        }, 0);
    }
    if (waarde === 3) {
        hobby.classList = ("");
        bio.classList = ("");
        foto.classList = ("");
        setTimeout(function () {
            hobby.classList.add("show_anim");
        }, 0);
    }
}

knopBio.addEventListener("click", function () {
    show(1);
});

knopFoto.addEventListener("click", function () {
    show(2);
});

knopHobby.addEventListener("click", function () {
    show(3);
});