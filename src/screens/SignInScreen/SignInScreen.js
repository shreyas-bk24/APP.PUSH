import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native';
import Logo from '../../../assets/images/logo.png'
import CustomeInput from '../../components/CustomInput/CustomeInput';
import { CustomButton } from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// assigning Authentication function to a variable
const auth = getAuth();

const SignInScreen = () => {

  // states 

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // getting the height of the system
  const { height } = useWindowDimensions();

  // creating the navigation
  const navigation = useNavigation();

  // function to handle signin
  const onSignIn = () => {
    if (email.trim() && password.trim()) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigation.navigate('MainScreen')
          setEmail('')
          setPassword('')
        })
        .catch((err) => {
          alert('Invalid Email or Password')
        });
    }
    else {
      alert('Email and password both are required !!!')
    }
  }

  // function to move to the forgot password page
  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword')
  }
  const dontHaveAccount = () => {
    navigation.navigate('SignUp')
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode='contain' />
        <Text style={styles.title}>Login here</Text>
        <CustomeInput placeholder="username" value={email} setValue={setEmail} />
        <CustomeInput placeholder='password' value={password} setValue={setPassword} secureTextEntry />
        <CustomButton text='Sign In' onPress={onSignIn} />

        <CustomButton text='Forgot password' onPress={onForgotPassword} type='TERTIARY' />
        {/* <SocialSignInButtons /> */}
        <CustomButton text='Do not have an account' onPress={dontHaveAccount} type='TERTIARY' />
      </View>
    </ScrollView>
  )
}

// styles

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  }
})

export default SignInScreen;