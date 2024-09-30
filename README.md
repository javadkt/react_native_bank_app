
# React Native User Account Creation App

This project is a **React Native** app built with version `0.75.3`, providing features for user account creation and management. The app uses **Redux** for state management and **Saga** for handling asynchronous actions.

## Prerequisites

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher)
- **React Native CLI** installed globally (`npm install -g react-native-cli`)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development)

## Getting Started

### 1. Install Dependencies

After cloning the repository, run the following command to install all the required dependencies:

```bash
npm install
```

### 2. Android Setup

To run the project on Android, ensure you have Android Studio set up with the proper Android SDK and emulator configurations.

To start the Android app, run the following:

```bash
react-native run-android
```

### 3. iOS Setup

To run the project on iOS, make sure you have Xcode installed. Install the required pods by running:

```bash
cd ios && pod install && cd ..
```

Then run the app on the iOS simulator:

```bash
react-native run-ios
```

### 4. Running Tests

#### Jest Test Cases

The project includes **Jest** test cases for unit and integration testing.

To run the tests, use the following command:

```bash
npm test
```

Jest will automatically look for files with `.test.js` or `.spec.js` extensions and run all test cases inside them.

For example:

```js
// Example test case using Jest
describe('User Reducer', () => {
  it('should handle USER_REGISTER_SUCCESS', () => {
    // Test implementation
  });
});
```
