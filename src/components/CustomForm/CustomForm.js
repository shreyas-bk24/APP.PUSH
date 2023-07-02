import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { CustomButton } from '../CustomButtons/CustomButton';
import CustomeInput from '../CustomInput/CustomeInput';
import { Dimensions } from 'react-native';
import { getFirestore } from 'firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../../../assets/images/logo.png'
import { collection, doc, addDoc } from 'firebase/firestore';
import {app} from '../../../firebaseConfig'
import { useNavigation } from '@react-navigation/native';

// creating the databse instance
const db=getFirestore(app)


export default function CustomForm({ field }) {
  // states for the inputs
  const [firstname,setFirstname]=useState()
  const [lastname,setLastname]=useState()
  const [email,setEmail]=useState()
  const [sslc,setSslc]=useState('0.0')
  const [puc,setPuc]=useState('0.0')
  const [degree,setDegre]=useState('0.0')
  const [qulaification,setQualification]=useState()

  // navigation for navigation
  const navigation=useNavigation();

  // add data to database using async functions
  async function addData() {
    try {
      detailsRef = await addDoc(collection(db, "details"), {
        FirstName: firstname,
        LastName: lastname,
        email: email,
        sslc: sslc,
        puc: puc,
        degree: degree,
        highestQualification: qulaification,
      })
      console.log("data added successfully")
      navigation.navigate('MainScreen')
    }
    catch (error) {
      console.log(error)
    }
  }

  // handling submit 
  const handleSubmit=()=>{
    if(firstname && lastname && email && sslc && puc && degree && qulaification){
      addData();
      alert(`Application submitted for ${field} internship successfully` )
    }
    else{
      alert("All fields are required")
    }
  }

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.headText}>Application for {field}</Text>
        <CustomeInput placeholder='First Name' value={firstname} setValue={setFirstname} />
        <CustomeInput placeholder='Last Name' value={lastname} setValue={setLastname} />
        <CustomeInput placeholder='Email' value={email} setValue={setEmail} />
        <CustomeInput placeholder='SSLC (CGPA)' value={sslc} setValue={setSslc} />
        <CustomeInput placeholder='PUC (CGPA)' value={puc} setValue={setPuc} />
        <CustomeInput placeholder='Degree (CGPA)' value={degree} setValue={setDegre} />
        <CustomeInput placeholder='Highest Qualification' value={qulaification} setValue={setQualification} />
        <CustomButton  text='submit' onPress={handleSubmit} />
      </View>
      </ScrollView>
    </SafeAreaView>
)
}

// getting device width
const divWidth = Dimensions.get('window').width

// styles
const styles = StyleSheet.create({
  container: {
    width: '92%',
    alignItems: 'center',
    alignSelf: 'center'
  },
  logo: {
    width: '100%',
    maxWidth: 500,
    height: 200,
  },
  divStyle: {
    width: divWidth,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 5
  },
  textContainer: {
    alignSelf: 'center',
  },
  headText: {
    fontSize: 24,
    fontWeight: 600,
    padding: 12,
  },
  buttonStyle: {
    width: '94%',
    height: 60,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    backgroundColor: '#4579ff',
  }
})
