import { ICharacter } from '../interfaces/ICharacter';

export type RickAndMortyContextType = {
  characters: ICharacter[];
  loading: boolean;
  deleteCharacter: (id: number) => void;
  //   refreshList?: () => void;
};
