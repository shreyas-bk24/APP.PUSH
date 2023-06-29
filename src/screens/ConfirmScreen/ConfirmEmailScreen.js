import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, BackHandler } from 'react-native';
import Logo from '../../../assets/images/logo.png'
import CustomeInput from '../../components/CustomInput/CustomeInput';
import { CustomButton } from '../../components/CustomButtons/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')

    const navigator=useNavigation();

    const validate = () => {
        // validate email
        navigator.navigate('Home')
    }

    const resendCode = () => {
        console.warn("resend code")
    }

    const BackToSignIn=()=>{
        navigator.navigate('SignIn')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm your Email</Text>
                <CustomeInput placeholder="email" value={email} setValue={setEmail} />
                <CustomeInput placeholder="CODE" value={otp} setValue={setOtp} secureTextEntry={true} />
                <CustomButton text='submit' onPress={validate} bgcolor="#ebbaa7" />

                <Text style={styles.text}>By registering,you confirm that you accecept our{' '}
                    <Text style={styles.link}>Terms and conditions</Text> and {' '}
                    <Text style={styles.link}>Privacy policies</Text></Text>

                {/* include the social sign in buttons */}

               
                <CustomButton text='Resend code' onPress={resendCode} type='SECON DARY' style={{alignContent:'flex-end'}}/>
                <CustomButton text='back to Sign In' onPress={BackToSignIn} type='TERTIARY' style={{alignContent:'flex-end'}}/>
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

export default ConfirmEmailScreen;