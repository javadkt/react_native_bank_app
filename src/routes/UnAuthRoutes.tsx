// src/routes/UnAuthRoutes.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserAccountCreationScreen from '../screens/userAccountCreation/UserAccountCreationScreen.tsx';
import ResponseStatus from '../screens/common/ResponseStatus.tsx';

const Stack = createStackNavigator();

const UnAuthRoutes = () => {
  return (
    <Stack.Navigator initialRouteName={'CreateAccount'}>
      <Stack.Screen
        name="CreateAccount"
        component={UserAccountCreationScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ResponseStatus"
        component={ResponseStatus}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default UnAuthRoutes;
