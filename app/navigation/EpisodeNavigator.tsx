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
        name='EpisodeList'
        component={EpisodeListScreen}
        options={{
          title: 'Rick and Morty Episodes',
        }}
      />
      <Stack.Screen
        name='EpisodeDetails'
        component={EpisodeDetailsScreen}
        options={({ route }) => ({
          title: route.params.epName,
        })}
      />
    </Stack.Navigator>
  );
}
