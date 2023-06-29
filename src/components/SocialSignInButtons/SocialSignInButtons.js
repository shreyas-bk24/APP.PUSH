import { View, Text } from 'react-native'
import React from 'react'
import { CustomButton } from '../CustomButtons/CustomButton'

// call back functions

const onFacebook=()=>{
  console.warn("Facebook")
}

const onGoogle=()=>{
  console.warn('Google')
}

const onApple=()=>{
  console.warn("Apple")
}


// Buttons
const SocialSignInButtons = () => {
  return (
    <>
      <CustomButton text='Sign In with Facebook' onPress={onFacebook} bgcolor='#E7EAF4' fgcolor='#4765A9' />
      <CustomButton text='Sign In with Google' onPress={onGoogle} bgcolor='#FAE9EA' fgcolor='#e64570' />
      <CustomButton text='Sign In with Apple' onPress={onApple} bgcolor='#e3e3e3' fgcolor='#363636' />
    </>
  )
}

export default SocialSignInButtons