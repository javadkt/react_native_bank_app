import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'; // Import mock store
import AccountForm from './AccountForm'; // Adjust the import path accordingly
import { createUserAccountRequest } from '../../store/userAccount/userAccountSlice.ts';

const mockStore = configureMockStore(); // Use redux-mock-store

describe('AccountForm Component', () => {
  let store: any; // Type the store as `any` for simplicity in mocking

  beforeEach(() => {
    store = mockStore({
      userAccount: {
        form: {
          name: '',
          email: '',
          password: '',
          errors: {},
        },
        isLoading: false,
        error: null,
      },
    });
    store.dispatch = jest.fn(); // Mock the dispatch function
  });

  test('renders correctly', () => {
    render(
      <Provider store={store}>
        <AccountForm />
      </Provider>
    );

    expect(screen.getByText('Create Account')).toBeTruthy();
    expect(screen.getByPlaceholderText('Full Name')).toBeTruthy();
    expect(screen.getByPlaceholderText('Email address')).toBeTruthy();
    expect(screen.getByPlaceholderText('Password')).toBeTruthy();
    expect(screen.getByText('SIGN UP')).toBeTruthy();
  });

  test('validates form fields', () => {
    render(
      <Provider store={store}>
        <AccountForm />
      </Provider>
    );

    fireEvent.press(screen.getByText('SIGN UP'));

    // Check for error messages
    expect(screen.getByText('Name is required')).toBeTruthy();
    expect(screen.getByText('Email is required')).toBeTruthy();
    expect(screen.getByText('Password is required')).toBeTruthy();
  });

  test('dispatches createUserAccountRequest on valid form submission', () => {
    render(
      <Provider store={store}>
        <AccountForm />
      </Provider>
    );

    // Fill the form
    fireEvent.changeText(screen.getByPlaceholderText('Full Name'), 'John Doe');
    fireEvent.changeText(screen.getByPlaceholderText('Email address'), 'john@example.com');
    fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password123');

    // Check the checkbox
    fireEvent.press(screen.getByText('I agree with Terms and Privacy'));

    // Submit the form
    fireEvent.press(screen.getByText('SIGN UP'));

    // Expect the action to be dispatched
    expect(store.dispatch).toHaveBeenCalledWith(
      createUserAccountRequest({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      })
    );
  });

  test('shows snackbar when terms are not agreed upon', () => {
    render(
      <Provider store={store}>
        <AccountForm />
      </Provider>
    );

    // Fill the form
    fireEvent.changeText(screen.getByPlaceholderText('Full Name'), 'John Doe');
    fireEvent.changeText(screen.getByPlaceholderText('Email address'), 'john@example.com');
    fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password123');

    // Submit the form without checking the terms
    fireEvent.press(screen.getByText('SIGN UP'));

    // Check if snackbar is displayed
    expect(screen.getByText('Please agree to the Terms and Privacy before signing up.')).toBeTruthy();
  });
});
