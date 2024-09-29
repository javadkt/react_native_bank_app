import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  SafeAreaView,
  Animated,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import personImage from '../../../assets/images/person.png';
import googlIcon from '../../../assets/images/google.png';
import email from '../../../assets/images/email.png';
import lock from '../../../assets/images/lock.png';
import rak from '../../../assets/images/rak_icon.png';
import visibilityIcon from '../../../assets/images/visibility.png'; // Assuming this is the eye icon for visibility
import visibilityOffIcon from '../../../assets/images/visibility_off.png'; // Assuming this is the eye-off icon for hiding
import check from '../../../assets/images/check.png'; // Assuming this is the eye-off icon for hiding
import {RootState} from '../../store/store.ts';
import {
  createUserAccountRequest,
  createUserAccountSuccess,
  setFormErrors,
  updateFormField,
} from '../../store/userAccount/userAccountSlice.ts';
import styles from './AccountForm.styles.ts';
import ScrollView = Animated.ScrollView;
import {Snackbar} from 'react-native-paper';

const AccountForm: React.FC = () => {
  const dispatch = useDispatch();
  const {form, isLoading, error} = useSelector(
    (state: RootState) => state.userAccount,
  );

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

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
      // Dispatch the new errors
      dispatch(setFormErrors(newErrors));
    } else {
      dispatch(setFormErrors({}));
      if (!isChecked) {
        setSnackbarVisible(true);
      } else {
        handleSignUp();
      }
    }
  };

  const handleSignUp = () => {
    dispatch(createUserAccountRequest());

    // Simulate API call
    setTimeout(() => {
      // Replace this with actual API logic
      const fakeUser = {
        name: form.name,
        email: form.email,
        password: form.password,
      };
      //dispatch(createUserAccountSuccess(fakeUser));
      Alert.alert('Sign-up successful!');
    }, 1000);
  };

  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
          <Image
            source={rak}
            style={styles.logo} // Use the imported image here
          />
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
              secureTextEntry={!isPasswordVisible}
              onChangeText={value =>
                dispatch(updateFormField({field: 'password', value}))
              }
            />
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
              <Image
                source={isPasswordVisible ? visibilityIcon : visibilityOffIcon}
                style={styles.icon} // Use the same icon style
              />
            </TouchableOpacity>
          </View>
          {form.errors.password && (
            <Text style={styles.errorText}>{form.errors.password}</Text>
          )}

          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setIsChecked(!isChecked)}>
              {isChecked && (
                <Image source={check} style={styles.checkmarkIcon} />
              )}
            </TouchableOpacity>

            <Text style={styles.checkboxText}>
              I agree with <Text style={styles.redText}>Terms</Text> and{' '}
              <Text style={styles.redText}>Privacy</Text>
            </Text>
          </View>

          <TouchableOpacity style={styles.signUpButton} onPress={validateForm}>
            <Text style={styles.signUpText}>
              {isLoading ? 'Loading...' : 'SIGN UP'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.googleButton}>
            <Image source={googlIcon} style={styles.googleIcon} />
            <Text style={styles.googleButtonText}>Sign Up With Google</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>
            Already have an account? <Text style={styles.redText}> Log In</Text>
          </Text>
        </View>
      </ScrollView>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}>
        Please agree to the Terms and Privacy before signing up.
      </Snackbar>
    </>
  );
};

export default AccountForm;
