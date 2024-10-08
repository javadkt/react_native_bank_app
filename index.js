/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

LogBox.ignoreLogs(['Warning: ...']);//Temp
LogBox.ignoreAllLogs();//Temp
AppRegistry.registerComponent(appName, () => App);
