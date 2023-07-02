import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, BackHandler } from 'react-native';
import CustomeInput from '../../components/CustomInput/CustomeInput';
import { CustomButton } from '../../components/CustomButtons/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const NewPassword = () => {
    const [Password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigation=useNavigation();

    const submitReset = () => {
        navigation.navigate('Home')
    }

    const BackToSignIn=()=>{
        navigation.navigate('SignIn')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your Password</Text>
                <CustomeInput placeholder="New Password" value={Password} setValue={setPassword} />
                <CustomeInput placeholder="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} secureTextEntry={true} />
                <CustomButton text='submit' onPress={submitReset} bgcolor="#ebbaa7" />
 
                <CustomButton text='back to Sign In' onPress={BackToSignIn} type='TERTIARY'/>
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

export default NewPassword;