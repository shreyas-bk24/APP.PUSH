import { StyleSheet, Text, View } from 'react-native';
import NavigationFun from './src/navigation';

// calling navigation function
// App.js is the entry point of the whole project

export default function App() {
  return (
    <NavigationFun/>
  );
}

// styles 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent:'center',
    justifyContent: 'center',
  },
});
