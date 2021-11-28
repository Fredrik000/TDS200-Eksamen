import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import CharacterNavigator from './CharacterNavigator';
import EpisodeNavigator from './EpisodeNavigator';
import colors from '../config/colors';

export type RootTabParamList = {
  Characters: undefined;
  Episodes: undefined;
};

export default function TabNavigator() {
  const Tab = createBottomTabNavigator<RootTabParamList>();

  return (
    <Tab.Navigator
      initialRouteName='Characters'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarBackground: () => (
          <View style={{ backgroundColor: colors.background }} />
        ),
      }}
    >
      <Tab.Screen
        name='Characters'
        component={CharacterNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name='users' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Episodes'
        component={EpisodeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name='list' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
