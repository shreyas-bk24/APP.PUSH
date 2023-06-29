import React,{useState} from 'react';
import { View, Text ,Image,StyleSheet,useWindowDimensions,ScrollView} from 'react-native';
import Logo from '../../../assets/images/logo.jpeg'
import CustomeInput from '../../components/CustomInput/CustomeInput';
import { CustomButton } from '../../components/CustomButtons/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';


const SignInScreen = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const {height}=useWindowDimensions();
  const navigation =useNavigation();

  const onSignIn=()=>{
    // validate user
    signInWithEmailAndPassword(auth,email,password)
    .then(()=>{
      navigation.navigate('Home')
      console.log("User login successful")
    })
    .catch((err)=>{
      console.log(err)
    });
  }
  const onForgotPassword=()=>{
    navigation.navigate('ForgotPassword')
  }
  const dontHaveAccount=()=>{
    navigation.navigate('SignUp')
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo,{height:height*0.3}]} resizeMode='contain'/>
      <CustomeInput placeholder="username" value={email} setValue={setEmail}/>
      <CustomeInput placeholder='password' value={password} setValue={setPassword} secureTextEntry />
      <CustomButton text='Sign In' onPress={onSignIn} />

      <CustomButton text='Forgot password' onPress={onForgotPassword} type='TERTIARY'/>
      <SocialSignInButtons />
      <CustomButton text='Do not have an account' onPress={dontHaveAccount} type='TERTIARY'/>
    </View>
    </ScrollView>
  )
}


const styles=StyleSheet.create({
  root:{
    alignItems:'center',
    padding:20,
  },
  logo:{
    width:'70%',
    maxWidth:300,
    height:100,
  },
})

export default SignInScreen;