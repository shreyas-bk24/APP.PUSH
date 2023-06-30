import { View, Text, SafeAreaView, StyleSheet, VirtualizedList, ScrollView } from 'react-native'
import CustomBlock from '../../components/CustomBlocks/CustomBlock';

import hacker from '../../../assets/images/hacker.png'
import ai from '../../../assets/images/ai.png'
import appDev from '../../../assets/images/app-development.png'
import webDev from '../../../assets/images/computer-science.png'
import IOT from '../../../assets/images/iot.png'
import DA from '../../../assets/images/monitor.png'
import DS from '../../../assets/images/statistics.png'
const MainScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.blockHolder}>
                <View style={styles.headderContainer}>
                    <Text style={styles.title}>Exposys Data Labs Applications</Text>
                </View>
                <View style={styles.blockRows}>
                    <CustomBlock name="CyberSecurity" image={hacker} />
                    <CustomBlock name="AI" image={ai} />
                </View>
                <View style={styles.blockRows}>
                    <CustomBlock name="IOT" image={IOT} />
                    <CustomBlock name="DataScience" image={DS} />
                </View>
                <View style={styles.blockRows} >
                    <CustomBlock name="DataAnalytics" image={DA} />
                    <CustomBlock name="App Development" image={appDev} />
                </View>
                <View style={styles.blockRows} >
                    <CustomBlock name="Web Development" image={webDev} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    headderContainer: {
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 25,
    },
    title: {
        paddingTop:10,
        paddingBottom:10,
        fontSize: 24,
        fontWeight:700,
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