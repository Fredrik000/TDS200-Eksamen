import React, { useState, useContext } from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
import { ListItem, ListItemDelete } from '../components/ListComponents';
import { ICharacter } from '../interfaces/ICharacter';
import { RickAndMortyContext } from '../contexts/RickAndMortyContext';
import { RickAndMortyContextType } from '../types/RickAndMortyContextType';

const ListScreen = () => {
  const { characters, deleteCharacter } = useContext(
    RickAndMortyContext
  ) as RickAndMortyContextType;

  return (
    <View style={styles.container}>
      <View style={styles.listWrapper}>
        <View>
          <Text style={styles.sectionTitle}>Rick and Morty</Text>
        </View>
        <FlatList
          data={characters}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ListItem
              title={item.name}
              renderRightActions={() => (
                <ListItemDelete onPress={() => deleteCharacter(item.id)} />
              )}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  listWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ListScreen;
