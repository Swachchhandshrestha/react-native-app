import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';

import {DrawerContent} from './screens/DrawerContent';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarksScreen from './screens/BookmarksScreen';


 



const Drawer = createDrawerNavigator();


function App() {
  return (
    <NavigationContainer>
       <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarksScreen" component={BookmarksScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
