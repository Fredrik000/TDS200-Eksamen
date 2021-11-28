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
        name='CharacterDetails'
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
