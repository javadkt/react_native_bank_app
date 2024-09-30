// src/screens/ResponseStatus.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';

const ResponseStatus: React.FC = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, marginBottom: 20, color: 'green'}}>
        {'Our representative will get in touch with you shortly'}
      </Text>
    </View>
  );
};

export default ResponseStatus;
