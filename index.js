import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

import App from './app/App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
// 
// import {AppRegistry} from 'react-native';
// import App from './app/App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.runApplication(appName, {
//   rootTag: document.getElementById('root'),
// });
