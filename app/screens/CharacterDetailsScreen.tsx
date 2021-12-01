import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { RickAndMortyContext } from '../contexts/RickAndMortyContext';
import { RickAndMortyContextType } from '../types/RickAndMortyContextType';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootCharacterParamList } from '../navigation/CharacterNavigator';
import colors from '../config/colors';
import { ICharacter } from '../interfaces/ICharacter';

const CharacterDetailsScreen = ({
  route,
}: NativeStackScreenProps<RootCharacterParamList, 'CharacterDetails'>) => {
  const { characters } = useContext(
    RickAndMortyContext
  ) as RickAndMortyContextType;
  const [character, setCharacter] = useState<ICharacter>();

  const { charId } = route.params;

  useEffect(() => {
    setCharacter(characters.find((char) => char.id === charId));
  }, []);

  const showNewChar = (accumulator: number) => {
    if (character?.id) {
      let newId = character.id + accumulator;

      if (characters.some((char) => char.id === newId)) {
        setCharacter(characters.find((char) => char.id === newId));
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: character?.image }} style={styles.image} />
      </View>
      <View style={styles.informationContainer}>
        <Text style={styles.information}>Name: {character?.name}</Text>
        <Text style={styles.information}>Status: {character?.status}</Text>
        <Text style={styles.information}>Species: {character?.species}</Text>
        <Text style={styles.information}>Gender: {character?.gender}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title='Prev' onPress={() => showNewChar(-1)} />
        </View>
        <View style={styles.button}>
          <Button title='Next' onPress={() => showNewChar(1)} />
        </View>
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
  imageContainer: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
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
    marginTop: 10,
  },
  button: {
    margin: 5,
  },
});
