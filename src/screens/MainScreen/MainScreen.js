import { View, Text, SafeAreaView } from 'react-native'

const MainScreen = () => {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.title}>Exposys Data Labs</Text>
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    headderContainer:{
        alignContent:'center',
    },
    title:{
        fontSize:24,
    },
})
export default MainScreen