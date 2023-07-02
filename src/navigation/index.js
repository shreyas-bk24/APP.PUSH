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

import QualificationAI from '../screens/Forms/Qualifications';
import QualificationCyber from '../screens/Forms/Qualifications';
import QualificationIOT from '../screens/Forms/Qualifications';
import QualificationDS from '../screens/Forms/Qualifications';
import QualificationDA from '../screens/Forms/Qualifications';
import QualificationAppdev from '../screens/Forms/Qualifications';
import QualificationWebdev from '../screens/Forms/Qualifications';

const Stack = createNativeStackNavigator();

function NavigationFun() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen component={MainScreen} name='MainScreen' />
                <Stack.Screen component={HomeScreen} name='Home' />
                <Stack.Screen component={SignInScreen} name='SignIn' />
                <Stack.Screen component={SignUpScreen} name='SignUp' />
                <Stack.Screen component={ForgotPassword} name='ForgotPassword' />
                <Stack.Screen component={ConfirmEmailScreen} name='ConfirmScreen' />          
                <Stack.Screen component={NewPassword} name='ResetPassword' />
                <Stack.Screen component={QualificationAI} name='QualificationAI' />
                <Stack.Screen component={QualificationCyber} name='QualificationCyber' />
                <Stack.Screen component={QualificationIOT} name='QualificationIOT' />
                <Stack.Screen component={QualificationDS} name='QualificationDS' />
                <Stack.Screen component={QualificationDA} name='QualificationDA' />
                <Stack.Screen component={QualificationAppdev} name='QualificationAppdev' />
                <Stack.Screen component={QualificationWebdev} name='QualificationWebdev' />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default NavigationFun;