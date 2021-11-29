import { Dispatch, SetStateAction } from 'react';
import { ICharacter } from '../interfaces/ICharacter';
import { IEpisode } from '../interfaces/IEpisode';

export type RickAndMortyContextType = {
  loading: boolean;
  error: string;

  // Characters
  characters: ICharacter[];
  filteredCharacters: ICharacter[];
  setFilteredCharacters: Dispatch<SetStateAction<ICharacter[]>>;
  getCharactersFromService: () => void;
  deleteCharacter: (id: number) => void;

  // Episodes
  episodes: IEpisode[];
  filteredEpisodes: IEpisode[];
  setFilteredEpisodes: Dispatch<SetStateAction<IEpisode[]>>;
  getEpisodesFromService: () => void;
  deleteEpisode: (id: number) => void;
};
