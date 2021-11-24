import React, { FC, createContext, useState, useEffect } from 'react';
import { ICharacter } from '../interfaces/ICharacter';
import { RickAndMortyContextType } from '../types/RickAndMortyContextType';
import { rickAndMortyService } from '../services/rickAndMortyService';

export const RickAndMortyContext =
  createContext<RickAndMortyContextType | null>(null);

export const RickAndMortyProvider: FC = ({ children }) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCharactersFromService();
  }, []);

  // GET all characters from service
  const getCharactersFromService = async () => {
    setLoading(true);
    const results = await rickAndMortyService.getAll();
    setCharacters(results);
    setLoading(false);
  };

  // DELETE a single character from context
  const deleteCharacter = (id: number) => {
    setCharacters(characters?.filter((p) => p.id != id));
  };

  return (
    <RickAndMortyContext.Provider
      value={{ characters, loading, deleteCharacter }}
    >
      {children}
    </RickAndMortyContext.Provider>
  );
};
