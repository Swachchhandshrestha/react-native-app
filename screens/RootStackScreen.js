import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack'

import SupportScreen from './screens/SplashScreen';
import SettingsScreen from './screens/SignInScreen';
import BookmarksScreen from './screens/SignUpScreen';

const RootStack = createDrawerNavigator();


function App() {
  return (
       <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />

      </RootStack.Navigator>
  );
}

export default App;