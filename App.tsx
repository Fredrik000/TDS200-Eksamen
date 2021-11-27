import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import colors from './app/config/colors';
import { RickAndMortyProvider } from './app/contexts/RickAndMortyContext';
import { NavigationContainer } from '@react-navigation/native';
import CharacterNavigator from './app/navigation/CharacterNavigator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <RickAndMortyProvider>
          <CharacterNavigator />
        </RickAndMortyProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
