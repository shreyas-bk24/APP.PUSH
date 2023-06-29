import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen'

const Stack = createNativeStackNavigator();

function NavigationFun() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen component={HomeScreen} name='Home' />
                <Stack.Screen component={SignInScreen} name='SignIn' />
                <Stack.Screen component={SignUpScreen} name='SignUp' />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default NavigationFun;