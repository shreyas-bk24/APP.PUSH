import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

// creating the block which can be customized as per our needs
const CustomBlock = ({image, name}) => {
    return (
        <View style={styles.blockContainer}>
            <Image source={image}  style={styles.imageContainer} />
            <Text style={styles.textStyles}>{name}</Text>
        </View>
    )
}

// styles
const styles=StyleSheet.create({
    blockContainer:{
        width:190,
        height:200,
        marginLeft:0,
        backgroundColor:'#f0f0f0',
        borderRadius:5,
        alignItems:'center',
        padding:5
    },
    imageContainer:{
        width:100,
        height:100,
    },
    textStyles:{
        marginTop:15,
        fontSize:14,
        fontWeight:600,
    }
})

export default CustomBlock

