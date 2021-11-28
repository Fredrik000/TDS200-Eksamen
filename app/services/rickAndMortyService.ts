import axios from 'axios';

export const rickAndMortyService = (function () {
  // GET all characters from API
  const getAllCharacters = async () => {
    const response = await axios.get(
      'https://rickandmortyapi.com/api/character'
    );
    return response.data['results'];
  };

  // GET all episodes from API
  const getAllEpisodes = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/episode');
    return response.data['results'];
  };

  return { getAllCharacters, getAllEpisodes };
})();
