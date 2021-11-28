import React, { useContext, useState } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  EpisodeListItem,
  EpisodeListItemDelete,
  EpisodeSearchBar,
} from '../components/EpisodeList';
import { RickAndMortyContext } from '../contexts/RickAndMortyContext';
import { RickAndMortyContextType } from '../types/RickAndMortyContextType';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootEpisodeParamList } from '../navigation/EpisodeNavigator';
import colors from '../config/colors';
import { IEpisode } from '../interfaces/IEpisode';

const EpisodeListScreen = ({
  navigation,
}: NativeStackScreenProps<RootEpisodeParamList, 'EpisodeList'>) => {
  const { loading, getEpisodesFromService, deleteEpisode, filteredEpisodes } =
    useContext(RickAndMortyContext) as RickAndMortyContextType;

  return (
    <View style={styles.container}>
      <EpisodeSearchBar />
      <View style={styles.listWrapper}>
        <FlatList
          data={filteredEpisodes}
          keyExtractor={(item) => item.id.toString()}
          refreshing={loading}
          onRefresh={getEpisodesFromService}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('EpisodeDetails', {
                  epId: item.id,
                  epName: item.name,
                })
              }
            >
              <EpisodeListItem
                title={item.name}
                subtitle={item.episode}
                renderRightActions={() => (
                  <EpisodeListItemDelete
                    onPress={() => deleteEpisode(item.id)}
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

export default EpisodeListScreen;
