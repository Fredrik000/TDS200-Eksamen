import React, { useState, useContext, Dispatch, SetStateAction } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import colors from '../../config/colors';
import { RickAndMortyContext } from '../../contexts/RickAndMortyContext';
import { RickAndMortyContextType } from '../../types/RickAndMortyContextType';

const SearchBar = () => {
  const { episodes, loading, setFilteredEpisodes } = useContext(
    RickAndMortyContext
  ) as RickAndMortyContextType;

  const [search, setSearch] = useState('');

  const searchFilter = (text: string) => {
    if (text) {
      const newEpisodesArr = episodes.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredEpisodes(newEpisodesArr);
      setSearch(text);
    } else {
      setFilteredEpisodes(episodes);
      setSearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder='Search...'
        underlineColorAndroid='transparent'
        onChangeText={(text) => searchFilter(text)}
      >
        {search}
      </TextInput>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: { backgroundColor: colors.background },
  search: {
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: colors.accent,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
