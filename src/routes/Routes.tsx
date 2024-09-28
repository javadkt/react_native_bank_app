// src/routes/Routes.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
 // Routes for authenticated users
 //// Routes for unauthenticated users
import { useSelector } from 'react-redux';
import { AppState } from '../redux/store';
import UnAuthRoutes from './UnAuthRoutes.tsx';
import AppRoutes from './AppRoutes.tsx'; // Importing AppState type from your Redux store

const Routes = () => {
  // Get the user's login state from the Redux store
  const isLoggedIn = useSelector((state: AppState) => state.account.isLoggedIn);

  return (
    <NavigationContainer>
      {/* Conditionally render AppRoutes or UnAuthRoutes based on login state */}
      {isLoggedIn ? <AppRoutes /> : <UnAuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
