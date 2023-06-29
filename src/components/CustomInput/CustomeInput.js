import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomeInput = ({ value, setValue, placeholder ,secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.inputStyle}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'White',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    inputStyle: {
        width: 250,
        height: 50,
    }
})

export default CustomeInput;