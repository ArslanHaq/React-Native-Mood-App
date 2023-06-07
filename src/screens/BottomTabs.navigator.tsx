import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './Home.screen';
import { HistoryScreen } from './History.screen';
import { AnalyticsScreen } from './Analytics.screen';
import { Text, View } from 'react-native';
import { AnalyticsIcon, HistoryIcon, HomeIcon } from '../components/Icons';
import { theme } from '../theme';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colorBlue,
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return (
              <View>
                <HomeIcon size={size} color={color} />
              </View>
            );
          } else if (route.name === 'History') {
            return (
              <View>
                <HistoryIcon size={size} color={color} />
              </View>
            );
          } else {
            return (
              <View>
                <AnalyticsIcon size={size} color={color} />
              </View>
            );
          }
        },
      })}>
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Today's Mood",
          headerStyle: { backgroundColor: theme.colorPurple },
          headerTitleStyle: { color: theme.colorWhite },
        }}
      />
      <BottomTabs.Screen
        name="History"
        component={HistoryScreen}
        options={{
          title: 'Past Moods',
          headerStyle: { backgroundColor: theme.colorPurple },
          headerTitleStyle: { color: theme.colorWhite },
        }}
      />
      <BottomTabs.Screen
        name="Analytics"
        component={AnalyticsScreen}
        options={{
          title: 'Fancy Graphs',
          headerStyle: { backgroundColor: theme.colorPurple },
          headerTitleStyle: { color: theme.colorWhite },
        }}
      />
    </BottomTabs.Navigator>
  );
};
