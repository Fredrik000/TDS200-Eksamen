import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './app/config/colors';
import { RickAndMortyProvider } from './app/contexts/RickAndMortyContext';

import ListScreen from './app/screens/ListScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <RickAndMortyProvider>
        <ListScreen />
      </RickAndMortyProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
