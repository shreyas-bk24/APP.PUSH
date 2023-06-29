import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import NewPassword from '../screens/NewPasswordScreen/NewPassword';
import SignInScreen from '../screens/SignInScreen/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen'
import ConfirmEmailScreen from '../screens/ConfirmScreen/ConfirmEmailScreen';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword'
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MainScreen from '../screens/MainScreen/MainScreen';

const Stack=createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='SignIn' component={SignInScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        <Stack.Screen name='NewPassword' component={NewPassword} />
        <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
        <Stack.Screen name='MainPage' component={MainScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
