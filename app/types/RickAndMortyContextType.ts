import { ICharacter } from '../interfaces/ICharacter';

export type RickAndMortyContextType = {
  characters: ICharacter[];
  loading: boolean;
  getCharactersFromService: () => void;
  deleteCharacter: (id: number) => void;
};
