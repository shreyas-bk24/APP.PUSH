import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, BackHandler } from 'react-native';
import CustomeInput from '../../components/CustomInput/CustomeInput';
import { CustomButton } from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

// creating the auth variable

const auth = getAuth()

// function to handle forgot passwords

const ForgotPassword = () => {
    // state variables
    const [email, setEmail] = useState('')

    // for navigation
    const navigator = useNavigation();

    // handle the submitted input
    const onSendPress = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                navigator.navigate('SignIn')
            })
            .catch((err) => {
                if (err.code == 'auth/user-not-found') {
                    alert('User account doesnot exists!!!')
                    navigator.navigate('SignUp')
                }
            })
    }

    // to handle back to signin
    const backToSignIn = () => {
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