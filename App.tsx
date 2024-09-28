// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store.ts';
import Routes from './src/routes/Routes.tsx';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
