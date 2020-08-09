import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack'

import SplashScreen from './SplashScreen';
import LogInScreen from './LogInScreen';
import SignUpScreen from './SignUpScreen';

const RootStack = createStackNavigator();


function RootStackScreen() {
  return (
       <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignInScreen" component={LogInScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />

      </RootStack.Navigator>
  );
}

export default RootStackScreen;
