// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import Routes from './src/routes/Routes.tsx';
import store from './src/store/store.ts';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
