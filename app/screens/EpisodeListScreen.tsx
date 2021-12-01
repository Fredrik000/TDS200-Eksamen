import React, { useContext } from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
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

const EpisodeListScreen = ({
  navigation,
}: NativeStackScreenProps<RootEpisodeParamList, 'EpisodeList'>) => {
  const {
    loading,
    error,
    getEpisodesFromService,
    deleteEpisode,
    filteredEpisodes,
  } = useContext(RickAndMortyContext) as RickAndMortyContextType;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <EpisodeSearchBar />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        {loading ? (
          <ActivityIndicator size='large' color={colors.accent} />
        ) : null}
        {!error && !loading && (
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
        )}
      </View>
    </TouchableWithoutFeedback>
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
  error: {
    alignSelf: 'center',
    fontSize: 20,
    color: colors.danger,
  },
});

export default EpisodeListScreen;
