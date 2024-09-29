// src/routes/Routes.tsx
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// Routes for authenticated users
//// Routes for unauthenticated users
import {useSelector} from 'react-redux';

import UnAuthRoutes from './UnAuthRoutes.tsx';
import AppRoutes from './AppRoutes.tsx'; // Importing AppState type from your Redux store
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserAccountCreationScreen from '../screens/userAccountCreation/UserAccountCreationScreen.tsx';


const Routes = () => {
  // Get the user's login state from the Redux store
  /*
    const isLoggedIn = useSelector((state: AppState) => state.account.isLoggedIn);
  */
  /*
    const isLoggedIn = useSelector((state: AppState) => state.account.isLoggedIn);
  */
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      {/* Conditionally render AppRoutes or UnAuthRoutes based on login state */}
      {isLoggedIn ? <AppRoutes /> : <UnAuthRoutes />}
    </NavigationContainer>
  );
};
/*

function Routes() {
  /!*  const hasLogged = useSelector(hasLoggedSelector);
    const profile = useSelector(userProfileSelector);
    const dispatch = useDispatch();*!/

  return (
    <Stack.Navigator initialRouteName={'SplashScreen'}>
      <Stack.Screen
        name="CreateAccount"
        component={UserAccountCreationScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
*/

export default Routes;
