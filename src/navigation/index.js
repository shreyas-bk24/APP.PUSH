import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import ConfirmEmailScreen from '../screens/ConfirmScreen/ConfirmEmailScreen';
import MainScreen from '../screens/MainScreen/MainScreen';
import NewPassword from '../screens/NewPasswordScreen/NewPassword';

import CustomForm from '../components/CustomForm/CustomForm'

const Stack = createNativeStackNavigator();

function NavigationFun() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen component={CustomForm} name='CustomForm' />
                <Stack.Screen component={HomeScreen} name='Home' />
                <Stack.Screen component={SignInScreen} name='SignIn' />
                <Stack.Screen component={SignUpScreen} name='SignUp' />
                <Stack.Screen component={ForgotPassword} name='ForgotPassword' />
                <Stack.Screen component={ConfirmEmailScreen} name='ConfirmScreen' />
                <Stack.Screen component={MainScreen} name='MainScreen' />
                <Stack.Screen component={NewPassword} name='ResetPassword' />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default NavigationFun;