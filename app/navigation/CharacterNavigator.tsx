import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CharacterListScreen, CharacterDetailsScreen } from '../screens';
import colors from '../config/colors';

export type RootCharacterParamList = {
  CharacterList: undefined;
  CharacterDetails: { charId: number; charName: string };
};

export default function CharacterNavigator() {
  const Stack = createNativeStackNavigator<RootCharacterParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          color: colors.primary,
        },
        headerTintColor: colors.accent,
      }}
    >
      <Stack.Screen
        name='CharacterList'
        component={CharacterListScreen}
        options={{
          title: 'Rick and Morty Characters',
        }}
      />
      <Stack.Screen
        name='CharacterDetails'
        component={CharacterDetailsScreen}
        options={({ route }) => ({
          title: route.params.charName,
        })}
      />
    </Stack.Navigator>
  );
}
