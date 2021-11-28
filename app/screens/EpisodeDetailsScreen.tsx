import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { RickAndMortyContext } from '../contexts/RickAndMortyContext';
import { RickAndMortyContextType } from '../types/RickAndMortyContextType';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootEpisodeParamList } from '../navigation/EpisodeNavigator';
import colors from '../config/colors';
import { IEpisode } from '../interfaces/IEpisode';

const CharacterDetailsScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<RootEpisodeParamList, 'EpisodeDetails'>) => {
  const { episodes } = useContext(
    RickAndMortyContext
  ) as RickAndMortyContextType;
  const [episode, setEpisode] = useState<IEpisode>();

  const { epId } = route.params;

  useEffect(() => {
    setEpisode(episodes.find((ep) => ep.id === epId));
  }, []);

  const showNewChar = (accumulator: number) => {
    if (episode?.id) {
      let newId = episode.id + accumulator;

      if (episodes.some((ep) => ep.id === newId)) {
        setEpisode(episodes.find((ep) => ep.id === newId));
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.informationContainer}>
        <Text style={styles.information}>Name: {episode?.name}</Text>
        <Text style={styles.information}>Status: {episode?.episode}</Text>
        <Text style={styles.information}>Species: {episode?.air_date}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Prev' onPress={() => showNewChar(-1)} />
        <Button title='Next' onPress={() => showNewChar(1)} />
      </View>
    </View>
  );
};

export default CharacterDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  informationContainer: {
    borderColor: colors.accent,
    borderWidth: 1,
    padding: 10,
  },
  information: {
    paddingTop: 5,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
