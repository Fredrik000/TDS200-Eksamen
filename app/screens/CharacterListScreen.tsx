import React, { useContext, useState } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  CharacterListItem,
  CharacterListItemDelete,
  CharacterSearchBar,
} from '../components/CharacterList';
import { RickAndMortyContext } from '../contexts/RickAndMortyContext';
import { RickAndMortyContextType } from '../types/RickAndMortyContextType';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootCharacterParamList } from '../navigation/CharacterNavigator';
import colors from '../config/colors';

const CharacterListScreen = ({
  navigation,
}: NativeStackScreenProps<RootCharacterParamList, 'CharacterList'>) => {
  const {
    loading,
    getCharactersFromService,
    deleteCharacter,
    filteredCharacters,
  } = useContext(RickAndMortyContext) as RickAndMortyContextType;

  return (
    <View style={styles.container}>
      <CharacterSearchBar />
      <View style={styles.listWrapper}>
        <FlatList
          data={filteredCharacters}
          keyExtractor={(item) => item.id.toString()}
          refreshing={loading}
          onRefresh={getCharactersFromService}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CharacterDetails', {
                  charId: item.id,
                  charName: item.name,
                })
              }
            >
              <CharacterListItem
                title={item.name}
                subtitle={item.species}
                imageUri={item.image}
                renderRightActions={() => (
                  <CharacterListItemDelete
                    onPress={() => deleteCharacter(item.id)}
                  />
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
