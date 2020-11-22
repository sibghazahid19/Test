import { createStackNavigator } from '@react-navigation/stack'
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import Login from '../components/Login'
import Home from '../components/Home'
import { NavigationContainer } from '@react-navigation/native';
const AppStack = createStackNavigator();
 const App  = () => {
  return (
      <NavigationContainer>
    <AppStack.Navigator mode='modal' headerMode='none'>
      <AppStack.Screen name="Login" component={Login} />
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
    </NavigationContainer>
  );
}
export default App