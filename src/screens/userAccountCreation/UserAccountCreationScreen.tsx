// src/screens/userAccountCreation/UserAccountCreationScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import AccountForm from './AccountForm';

const UserAccountCreationScreen: React.FC = () => {
  return (
    <View>
      <Text>Create Account</Text>
      <AccountForm />
    </View>
  );
};

export default UserAccountCreationScreen;
