/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
*/
import 'react-native-gesture-handler'
import React from 'react';

import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Screens/Home';
import Settings from './Screens/Settings';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>

  );
}

export default App;
