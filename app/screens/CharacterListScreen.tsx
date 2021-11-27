import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  ListItem,
  ListItemDelete,
  SearchBar,
} from '../components/CharacterList';
import { RickAndMortyContext } from '../contexts/RickAndMortyContext';
import { RickAndMortyContextType } from '../types/RickAndMortyContextType';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootCharacterParamList } from '../navigation/CharacterNavigator';
import colors from '../config/colors';
import { ICharacter } from '../interfaces/ICharacter';

const CharacterListScreen = ({
  navigation,
}: NativeStackScreenProps<RootCharacterParamList, 'CharacterList'>) => {
  const { characters, loading, getCharactersFromService, deleteCharacter } =
    useContext(RickAndMortyContext) as RickAndMortyContextType;
  const [filteredCharacters, setFilteredCharacters] =
    useState<ICharacter[]>(characters);

  return (
    <View style={styles.container}>
      <SearchBar setFilteredCharacters={setFilteredCharacters} />
      <View style={styles.listWrapper}>
        <FlatList
          data={filteredCharacters}
          keyExtractor={(item) => item.id.toString()}
          refreshing={loading}
          onRefresh={getCharactersFromService}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Character', {
                  charId: item.id,
                  charName: item.name,
                })
              }
            >
              <ListItem
                title={item.name}
                subtitle={item.species}
                imageUri={item.image}
                renderRightActions={() => (
                  <ListItemDelete onPress={() => deleteCharacter(item.id)} />
                )}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listWrapper: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});

export default CharacterListScreen;
