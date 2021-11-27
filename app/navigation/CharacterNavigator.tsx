import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CharacterListScreen, CharacterDetailsScreen } from '../screens';
import colors from '../config/colors';

export type RootCharacterParamList = {
  CharacterList: undefined;
  Character: { charId: number; charName: string };
};

export default function CharacterNavigator() {
  const Stack = createNativeStackNavigator<RootCharacterParamList>();
  return (
    // screenOptions={{ headerShown: false }}
    <Stack.Navigator>
      <Stack.Screen
        name='CharacterList'
        component={CharacterListScreen}
        options={{
          title: 'The Rick and Morty App!',
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.primary,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name='Character'
        component={CharacterDetailsScreen}
        options={({ route }) => ({
          title: route.params.charName,
          headerStyle: {
            backgroundColor: colors.background,
          },
        })}
      />
    </Stack.Navigator>
  );
}
