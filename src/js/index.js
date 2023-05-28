import { fetchBreeds, fetchCatByBreed } from './cat-api';
const selectBreed = document.querySelector('select.breed-select');
const divInfo = document.querySelector('div.cat-info');
const loader = document.querySelector('p.loader');
const messageError = document.querySelector('p.error');

createSelectBreed();

function createSelectBreed() {
  fetchBreeds()
    .then(data =>
      data.map(({ id, name }) => {
        selectBreed.classList.remove('hide_show');
        const option = document.createElement('option');
        option.value = id;
        option.text = name;
        selectBreed.append(option);
      })
    )
    .catch(error => {
      console.log(error);
      messageError.classList.remove('hide_show');
    })
    .finally(() => loader.classList.add('hide_show'));
}

selectBreed.addEventListener('change', onSelected);

function onSelected() {
  divInfo.classList.add('hide_show');
  loader.classList.remove('hide_show');
  messageError.classList.add('hide_show');

  fetchCatByBreed(selectBreed.options[selectBreed.selectedIndex].value)
    .then(data =>
      data.map(({ breeds, url }) => {
        divInfo.classList.remove('hide_show');
        const markup = `<img src="${url}" alt="${breeds[0].name}" width="600" />
      <div class="description">
        <h2 class="name">${breeds[0].name}</h2>
        <p class="name_descr">${breeds[0].description}</p>
        <p class="temperament"><span>Temperament: </span>${breeds[0].temperament}</p>
      </div>`;
        divInfo.innerHTML = markup;
      })
    )
    .catch(error => {
      console.log(error);
      messageError.classList.remove('hide_show');
    })
    .finally(() => loader.classList.add('hide_show'));
}
