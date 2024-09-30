// src/navigation/navigationService.ts
import { NavigationContainerRef } from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export function navigate(name: string, params?: object) {
  console.log('navigating');
  navigationRef.current?.navigate(name, params);
}

// You can also add a method for navigating to the failure page
export function navigateToFailurePage() {
  navigate('FailurePage'); // Replace with your actual failure page route
}
