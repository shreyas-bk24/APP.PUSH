import { View, Text ,StyleSheet} from 'react-native'
import React from 'react';
import CustomeInput from '../CustomInput/CustomeInput';
import {Dimensions} from 'react-native';

const CustomForm = ({field}) => {
  return (
    <View style={styles.container}>
      <Text>Application for {field}</Text>
      <CustomeInput placeholder='First Name' />
      <CustomeInput placeholder='Last Name' />
      <CustomeInput placeholder='Email' />
      <View style={styles.divStyle}>
      <CustomeInput placeholder='SSLC [CGPA]' />
      <CustomeInput placeholder='PUC [CGPA]' />
      </View>
      <CustomeInput placeholder='Degree [CGPA]' />
      <CustomeInput placeholder='Highest qualification' />
    </View>
  )
}
const divWidth=Dimensions.get('window').width
const styles=StyleSheet.create({
    component:{
        width:'100%',
    },
    divStyle:{
        width:divWidth/3,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:5
    }
})
export default CustomForm