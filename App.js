import { StyleSheet, Text, View } from 'react-native';
import NavigationFun from './src/navigation';

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
