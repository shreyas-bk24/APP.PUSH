import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { CustomButton } from '../../components/CustomButtons/CustomButton'
import { useNavigation } from '@react-navigation/native';

// handlers 
// const navigator=useNavigation();

// const handleSignIn=()=>{
//   navigator.navigate('SignIn')
// }

// const handleSignUp=()=>{
//   navigator.navigate('SignUp')
// }

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.headderContainer}>
      <View style={styles.headderContainer}>
        <Text style={styles.headText}>Welcome to Exposys Data Labs</Text>
      </View>
      <View>
        <CustomButton text='Sign In' type='PRIMARY'  />
        <CustomButton text='Sign Up' type='Primary'  />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  headderContainer: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  headText: {
    fontSize: 24,
  }
})
export default HomeScreen;