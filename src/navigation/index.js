import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// import each and every pages of the application

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import ConfirmEmailScreen from '../screens/ConfirmScreen/ConfirmEmailScreen';
import MainScreen from '../screens/MainScreen/MainScreen';
import NewPassword from '../screens/NewPasswordScreen/NewPassword';

import { AI } from '../screens/Forms/Qualifications';
import { Cyber } from '../screens/Forms/Qualifications';
import { IOT } from '../screens/Forms/Qualifications';
import { DS } from '../screens/Forms/Qualifications';
import { DA } from '../screens/Forms/Qualifications';
import { AppDev } from '../screens/Forms/Qualifications';
import { Webdev } from '../screens/Forms/Qualifications';

// creating the stack navigator
const Stack = createNativeStackNavigator();

// here component and name are very much required

function NavigationFun() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen component={HomeScreen} name='Home' />
                <Stack.Screen component={MainScreen} name='MainScreen' />
                <Stack.Screen component={SignInScreen} name='SignIn' />
                <Stack.Screen component={SignUpScreen} name='SignUp' />
                <Stack.Screen component={ForgotPassword} name='ForgotPassword' />
                <Stack.Screen component={ConfirmEmailScreen} name='ConfirmScreen' />
                <Stack.Screen component={NewPassword} name='ResetPassword' />

                <Stack.Screen component={AI} name='AI' />
                <Stack.Screen component={Cyber} name='Cyber' />
                <Stack.Screen component={IOT} name='IOT' />
                <Stack.Screen component={DS} name='DS' />
                <Stack.Screen component={DA} name='DA' />
                <Stack.Screen component={AppDev} name='AppDev' />
                <Stack.Screen component={Webdev} name='Webdev' />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default NavigationFun;