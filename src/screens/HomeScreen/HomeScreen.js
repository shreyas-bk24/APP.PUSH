import { View, Text, SafeAreaView, StyleSheet,Image,useWindowDimensions } from 'react-native'
import { CustomButton } from '../../components/CustomButtons/CustomButton'
import { useNavigation } from '@react-navigation/native';
import Logo from '../../../assets/images/logo.png'

const HomeScreen = () => {

  const { height } = useWindowDimensions();
  // navigation variable
  const navigator = useNavigation();

  // event handlers 
  const handleSignIn = () => {
    navigator.navigate('SignIn')
  }
  const handleSignUp = () => {
    navigator.navigate('SignUp')
  }

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.headderContainer}>
        <View style={styles.headderContainer}>
          <Text style={styles.headText}>Welcome to APP.PUSH</Text>
        </View>
          <CustomButton text='Sign In' type='PRIMARY' onPress={handleSignIn} />
          <CustomButton text='Sign Up' type='PRIMARY' onPress={handleSignUp} />
      </View>
    </SafeAreaView>
  )
}

// styles

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  logo: {
    width: '70%',
    maxWidth: 400,
    height: 100,
  },
  headderContainer: {
    alignItems: 'center',
  },
  headText: {
    fontSize: 24,
    fontWeight: 600,
    paddingBottom:15,
  }
})
export default HomeScreen;