import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import personImage from '../../../assets/images/person.png';
import email from '../../../assets/images/email.png';
import lock from '../../../assets/images/lock.png';

import {RootState} from '../../store/store.ts';
import {
  createUserAccountRequest,
  createUserAccountSuccess,
  setFormErrors,
  updateFormField,
} from '../../store/userAccount/userAccountSlice.ts';

const AccountForm: React.FC = () => {
  const dispatch = useDispatch();
  const {form, isLoading, error} = useSelector(
    (state: RootState) => state.userAccount,
  );

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!form.name) {
      newErrors.name = 'Name is required';
    } else if (form.name.length > 50) {
      newErrors.name = 'Name cannot exceed 50 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!form.password) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (Object.keys(newErrors).length > 0) {
      dispatch(setFormErrors(newErrors));
    } else {
      handleSignUp();
    }
  };

  const handleSignUp = () => {
    dispatch(createUserAccountRequest());

    // Simulate API call
    setTimeout(() => {
      // Replace this with actual API logic
      const fakeUser = {id: '1', name: form.name, email: form.email};
      dispatch(createUserAccountSuccess(fakeUser));
      Alert.alert('Sign-up successful!');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <View style={styles.inputContainer}>
        <Image
          source={personImage} // Use the imported image here
          style={styles.icon}
        />
        <TextInput
          style={[styles.input, form.errors.name && styles.errorInput]}
          placeholder="Full Name"
          placeholderTextColor="#999"
          value={form.name}
          onChangeText={value =>
            dispatch(updateFormField({field: 'name', value}))
          }
        />
      </View>
      {form.errors.name && (
        <Text style={styles.errorText}>{form.errors.name}</Text>
      )}

      <View style={styles.inputContainer}>
        <Image
          source={email} // Use the imported image here
          style={styles.icon}
        />
        <TextInput
          style={[styles.input, form.errors.email && styles.errorInput]}
          placeholder="Email address"
          placeholderTextColor="#999"
          value={form.email}
          onChangeText={value =>
            dispatch(updateFormField({field: 'email', value}))
          }
          keyboardType="email-address"
        />
      </View>
      {form.errors.email && (
        <Text style={styles.errorText}>{form.errors.email}</Text>
      )}

      <View style={styles.inputContainer}>
        <Image
          source={lock} // Use the imported image here
          style={styles.icon}
        />
        <TextInput
          style={[styles.input, form.errors.password && styles.errorInput]}
          placeholder="Password"
          placeholderTextColor="#999"
          value={form.password}
          onChangeText={value =>
            dispatch(updateFormField({field: 'password', value}))
          }
          secureTextEntry
        />
      </View>
      {form.errors.password && (
        <Text style={styles.errorText}>{form.errors.password}</Text>
      )}

      <TouchableOpacity style={styles.signUpButton} onPress={validateForm}>
        <Text style={styles.signUpText}>
          {isLoading ? 'Loading...' : 'SIGN UP'}
        </Text>
      </TouchableOpacity>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28, // Increased the font size
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10, // Added padding to the input field
    marginBottom: 10,
    height: 50, // Increased height
  },
  icon: {
    width: 20, // Set to desired width
    height: 20, // Set to desired height
    marginRight: 10, // Space between icon and text
  },
  input: {
    flex: 1,
    fontSize: 16, // Increased the font size for input text
    color: '#000', // Text color is now black
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  signUpButton: {
    backgroundColor: '#ff4444',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  signUpText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16, // Increased button text size
  },
});

export default AccountForm;
