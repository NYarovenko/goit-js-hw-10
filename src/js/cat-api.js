const API_KEY =
  'live_2VrTbC1Mlr95oeEVFBGNGPWxg20l4hpQCguoe15EkphFYNLKzhakciPpW9vKVat0';

// породи котиків
function fetchBreeds() {
  const URL_BREEDS = 'https://api.thecatapi.com/v1/breeds';

  return fetch(URL_BREEDS).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

// персональна інфо про котика
function fetchCatByBreed(breedId) {
  const URL_BREEDS_SEARCH = 'https://api.thecatapi.com/v1/images/search';
  const searchParams = new URLSearchParams({
    breed_ids: breedId,
    api_key: API_KEY,
  });

  const url = `${URL_BREEDS_SEARCH}?${searchParams}`;
  // console.log(url);

  return fetch(`${URL_BREEDS_SEARCH}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
