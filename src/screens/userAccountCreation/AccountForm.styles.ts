import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    height: 115, // Adjust this value to scale down
    resizeMode: 'contain', // Ensures the image maintains aspect ratio
    alignSelf: 'center',
  },
  title: {
    fontSize: 22, // Increased font size
    fontWeight: 'bold',
    textAlign: 'justify',
    marginBottom: 16, // Increased spacing
    color: '#000',
  },
  checkmarkIcon: {
    width: 20, // Adjust size as needed
    height: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2, // Thicker border
    borderColor: '#ccc',
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 22, // Increased spacing
    height: 54, // Increased height
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    marginTop: -18,
  },
  signUpButton: {
    backgroundColor: '#ff4444',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 4,
    marginTop: 22,
    marginBottom: 10,
  },
  googleButton: {
    borderWidth: 1.5,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  googleIcon: {
    width: 20,
    height: 20,
  },
  googleButtonText: {
    color: '#999',
    marginLeft: 22,
    fontSize: 16,
  },
  signUpText: {
    color: '#fff',

    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10,
    marginTop: 6,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  checkboxText: {
    color: '#2f1414',
    marginTop: 6,
  },
  checked: {
    backgroundColor: '#000', // Change color when checked
  },
  redText: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#999',
    textAlign: 'center',
    fontSize: 15,
  },
  safeArea: {
    flex: 0,
    backgroundColor: '#2F3FBD',
  },
});

export default styles;
