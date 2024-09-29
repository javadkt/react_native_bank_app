
import { Provider } from 'react-redux';
import store from './src/store/store';
import Routes from './src/routes/Routes';
import "react-native-devsettings";


const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
