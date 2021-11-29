import React, { FC, createContext, useState, useEffect } from 'react';
import { ICharacter } from '../interfaces/ICharacter';
import { IEpisode } from '../interfaces/IEpisode';
import { RickAndMortyContextType } from '../types/RickAndMortyContextType';
import { rickAndMortyService } from '../services/rickAndMortyService';

export const RickAndMortyContext =
  createContext<RickAndMortyContextType | null>(null);

export const RickAndMortyProvider: FC = ({ children }) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<ICharacter[]>(
    []
  );
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [filteredEpisodes, setFilteredEpisodes] = useState<IEpisode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getCharactersFromService();
    getEpisodesFromService();
  }, []);

  // GET all characters from service
  const getCharactersFromService = async () => {
    setLoading(true);
    setError('');
    try {
      const results = await rickAndMortyService.getAllCharacters();
      setCharacters(results);
      setFilteredCharacters(results);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        setError(`Error: ${error.message}!`);
      }
    }
    setLoading(false);
  };

  // DELETE a single character from context
  const deleteCharacter = (id: number) => {
    setCharacters(characters?.filter((p) => p.id != id));
    setFilteredCharacters(filteredCharacters?.filter((p) => p.id != id));
  };

  // GET all episodes from service
  const getEpisodesFromService = async () => {
    setLoading(true);
    setError('');
    try {
      const results = await rickAndMortyService.getAllEpisodes();
      setEpisodes(results);
      setFilteredEpisodes(results);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        setError(`Error: ${error.message}!`);
      }
    }
    setLoading(false);
  };

  // DELETE a single episode from context
  const deleteEpisode = (id: number) => {
    setEpisodes(episodes?.filter((p) => p.id != id));
    setFilteredEpisodes(filteredEpisodes?.filter((p) => p.id != id));
  };

  return (
    <RickAndMortyContext.Provider
      value={{
        loading,
        error,
        characters,
        getCharactersFromService,
        deleteCharacter,
        filteredCharacters,
        setFilteredCharacters,
        episodes,
        getEpisodesFromService,
        deleteEpisode,
        filteredEpisodes,
        setFilteredEpisodes,
      }}
    >
      {children}
    </RickAndMortyContext.Provider>
  );
};
