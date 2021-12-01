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
    error,
    getCharactersFromService,
    deleteCharacter,
    filteredCharacters,
  } = useContext(RickAndMortyContext) as RickAndMortyContextType;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <CharacterSearchBar />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        {loading ? (
          <ActivityIndicator size='large' color={colors.accent} />
        ) : null}
        {!error && !loading && (
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
  },
  error: {
    alignSelf: 'center',
    fontSize: 20,
    color: colors.danger,
  },
});

export default CharacterListScreen;
