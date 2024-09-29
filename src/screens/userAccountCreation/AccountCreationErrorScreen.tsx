// src/screens/userAccountCreation/AccountCreationErrorScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';

const AccountCreationErrorScreen: React.FC<{ message: string }> = ({ message }) => {
  return (
    <View>
      <Text>Error: {message}</Text>
    </View>
  );
};

export default AccountCreationErrorScreen;
