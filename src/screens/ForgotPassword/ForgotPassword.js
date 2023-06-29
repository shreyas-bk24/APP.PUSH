import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, BackHandler } from 'react-native';
import Logo from '../../../assets/images/logo.jpeg'
import CustomeInput from '../../components/CustomInput/CustomeInput';
import { CustomButton } from '../../components/CustomButtons/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { getAuth,sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const navigator=useNavigation();

    const onSendPress = () => {
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            navigator.navigate('SignIn')
        })
        .catch((err)=>{
            if(err.code=='auth/user-not-found'){
                navigator.navigate('SignUp')
            }
            console.log(err.code)
        })
    }

    const backToSignIn=()=>{
        navigator.navigate('SignIn')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset Password</Text>
                <CustomeInput placeholder="Enter email" value={email} setValue={setEmail} />
                <CustomButton text='Send' onPress={onSendPress} bgcolor="#ebbaa7" />
                <CustomButton text='Back to Sign In' onPress={backToSignIn} type='TERTIARY' />
            </View>
        </ScrollView>
    )
}


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

export default ForgotPassword;