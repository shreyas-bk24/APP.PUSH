import React from 'react'
import { Text,StyleSheet,View ,Pressable} from 'react-native'

export const CustomButton = ({onPress,text,type= 'PRIMARY',bgcolor,fgcolor }) => {
  return (
    <Pressable 
        onPress={onPress} 
        style={[
            styles.container,
            styles[`container_${type}`],
            bgcolor ? {backgroundColor:bgcolor} : {}
            ]}>
        <Text style={[
            styles.text,
            styles[`text_${type}`],
             fgcolor ? {color:fgcolor} : {}
            ]}>{text}</Text>
    </Pressable>
  )
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        borderRadius:8,
        padding:15,
        marginVertical:5,
        alignItems:'center',
    },

    container_PRIMARY:{
        backgroundColor:'#4579ff',
    },
    container_SECONDARY:{
        borderColor:'#3B71F3',
        borderWidth:2,
    },

    container_TERTIARY:{
    },
    text:{
        fontWeight:'bold',
        color:'white',
    },
    text_SECONDARY:{
        color:'#3B71F3'
    },
    text_TERTIARY:{
        color:'gray'
    }
})