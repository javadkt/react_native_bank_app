// src/routes/UnAuthRoutes.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const UnAuthRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: true }}>
  {/*    <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />*/}
      {/* Add other unauthenticated routes here, e.g., ForgotPasswordScreen */}
    </Stack.Navigator>
  );
};

export default UnAuthRoutes;
