import React, { useContext } from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
import { ListItem, ListItemDelete } from '../components/ListComponents';
import { RickAndMortyContext } from '../contexts/RickAndMortyContext';
import { RickAndMortyContextType } from '../types/RickAndMortyContextType';

const ListScreen = () => {
  const { characters, loading, getCharactersFromService, deleteCharacter } =
    useContext(RickAndMortyContext) as RickAndMortyContextType;

  return (
    <View style={styles.container}>
      <View style={styles.listWrapper}>
        <View>
          <Text style={styles.sectionTitle}>Rick and Morty</Text>
        </View>
        <FlatList
          data={characters}
          keyExtractor={(item) => item.id.toString()}
          refreshing={loading}
          onRefresh={getCharactersFromService}
          renderItem={({ item }) => (
            <ListItem
              title={item.name}
              subtitle={item.species}
              imageUri={item.image}
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
    backgroundColor: colors.background,
  },
  listWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: colors.primary,
  },
});

export default ListScreen;
