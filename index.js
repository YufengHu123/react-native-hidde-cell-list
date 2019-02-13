/** @format */

import {AppRegistry} from 'react-native';
import RootApp from './src/App'
import {name as appName} from './app.json';
console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => RootApp);
