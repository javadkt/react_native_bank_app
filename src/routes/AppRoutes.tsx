// src/routes/AppRoutes.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
{/*      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />*/}
      {/* Add other authenticated routes here, e.g., ProfileScreen, SettingsScreen, etc. */}
    </Stack.Navigator>
  );
};

export default AppRoutes;
