import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import CustomeInput from '../../components/CustomInput/CustomeInput';
import { CustomButton } from '../../components/CustomButtons/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

const SignUpScreen = () => {

  // setting states
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

// creating a navigation variable
  const navigation = useNavigation();

  // call back function to handle sign up
  const register = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            alert("Please verrify your email by clicking on the verification link sent to your mail");
            navigation.navigate('MainScreen')
          })
      })
      .catch((err) => {
        if (err.code == 'auth/email-already-in-use') {
          alert("This Email is already in use,You can sign in to that account or Create a new account")
        } else {
          alert("Unable to create an account")
        }
      })

  }

  // call back to handle already have an account conditions
  const haveAnAccount = () => {
    navigation.navigate('SignIn')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create a new account</Text>
        <CustomeInput placeholder="username" value={username} setValue={setUsername} />
        <CustomeInput placeholder="email" value={email} setValue={setEmail} />
        <CustomeInput placeholder='password' value={password} setValue={setPassword} secureTextEntry />
        <CustomeInput placeholder='repeat password' value={repeatPassword} setValue={setRepeatPassword} secureTextEntry />
        <CustomButton text='Register' onPress={register} />

        <Text style={styles.text}>By registering,you confirm that you accecept our{' '}
          <Text style={styles.link}>Terms and conditions</Text> and {' '}
          <Text style={styles.link}>Privacy policies</Text></Text>

        {/* include the social sign in buttons */}

        {/* <SocialSignInButtons /> */}

        <CustomButton text='Have an account? Sign In' onPress={haveAnAccount} type='TERTIARY' />
      </View>
    </ScrollView>
  )
}

// styles of this window 

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
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#e67905'
  }
})

export default SignUpScreen;