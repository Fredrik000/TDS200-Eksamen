import axios from 'axios';

export const rickAndMortyService = (function () {
  // GET all characters from API
  const getAll = async () => {
    const response = await axios.get(
      'https://rickandmortyapi.com/api/character'
    );
    return response.data['results'];
  };

  return { getAll };
})();
