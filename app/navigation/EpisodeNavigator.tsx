import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EpisodeListScreen, EpisodeDetailsScreen } from '../screens';
import colors from '../config/colors';

export type RootEpisodeParamList = {
  EpisodeList: undefined;
  EpisodeDetails: { epId: number; epName: string };
};

export default function CharacterNavigator() {
  const Stack = createNativeStackNavigator<RootEpisodeParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='EpisodeList'
        component={EpisodeListScreen}
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
        name='EpisodeDetails'
        component={EpisodeDetailsScreen}
        options={({ route }) => ({
          title: route.params.epName,
          headerStyle: {
            backgroundColor: colors.background,
          },
        })}
      />
    </Stack.Navigator>
  );
}
