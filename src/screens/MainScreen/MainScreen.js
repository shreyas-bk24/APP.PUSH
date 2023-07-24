import { View, Text, SafeAreaView, StyleSheet, VirtualizedList, ScrollView, Pressable } from 'react-native'
import CustomBlock from '../../components/CustomBlocks/CustomBlock';

import hacker from '../../../assets/images/hacker.png'
import ai from '../../../assets/images/ai.png'
import appDev from '../../../assets/images/app-development.png'
import webDev from '../../../assets/images/computer-science.png'
import IOT from '../../../assets/images/iot.png'
import DA from '../../../assets/images/monitor.png'
import DS from '../../../assets/images/statistics.png'
import { useNavigation } from '@react-navigation/native';


const MainScreen = () => {

    const navigator=useNavigation()

    // event callbacks for every pressables
    
    const handleCybersecurity=()=>{
        navigator.navigate('Cyber')
    }

    const handleIOT=()=>{
        navigator.navigate('IOT')
    }

    const handleDS=()=>{
        navigator.navigate('DS')
    }

    const handleDA=()=>{
        navigator.navigate('DA')
    }

    const handleAppDev=()=>{
        navigator.navigate('AppDev')
    }
    const handleWebdev=()=>{
        navigator.navigate('Webdev')
    }
    const handleAI=()=>{
        navigator.navigate('AI')
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.blockHolder}>
                <View style={styles.headderContainer}>
                    <Text style={styles.title}>Choose Your Domain of Intrest</Text>
                </View>
                <View style={styles.blockRows}>
                    <Pressable onPress={handleCybersecurity}>
                        <CustomBlock name="CyberSecurity" image={hacker} />
                    </Pressable>
                    <Pressable onPress={handleAI}>
                        <CustomBlock name="AI" image={ai} />
                    </Pressable>
                </View>
                <View style={styles.blockRows}>
                    <Pressable onPress={handleIOT}>
                        <CustomBlock name="IOT" image={IOT} />
                    </Pressable>
                    <Pressable onPress={handleDS}>
                        <CustomBlock name="DataScience" image={DS} />
                    </Pressable>
                </View>
                <View style={styles.blockRows} >
                    <Pressable onPress={handleDA}>
                        <CustomBlock name="DataAnalytics" image={DA} />
                    </Pressable>
                    <Pressable onPress={handleAppDev}>
                        <CustomBlock name="App Development" image={appDev} />
                    </Pressable>
                </View>
                <View style={styles.blockRows}>
                    <Pressable onPress={handleWebdev}>
                        <CustomBlock name="Web Development" image={webDev} />
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

// styles

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    headderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },
    title: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 24,
        fontWeight: 700,
    },
    blockHolder: {
        flexDirection: 'column',
    },
    blockRows: {
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 5,
    }

})
export default MainScreen