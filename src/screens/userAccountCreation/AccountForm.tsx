// src/screens/userAccountCreation/AccountForm.tsx
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';

const AccountForm: React.FC = () => {
   const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

/*  const handleSubmit = () => {
    dispatch(createUserAccount({ name, email, password })); // Dispatch the action with form data
  };*/

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
     {/* <Button title="Create Account" onPress={handleSubmit} />*/}
    </View>
  );
};

export default AccountForm;
