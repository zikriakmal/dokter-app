import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const TextInputComponent = (props) =>
{
    return (
        <View
            elevation={5}
            style={styles.inputContainer}>
            <TextInput
                {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable
                placeholder="cari dokter kamu !" />
        </View>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        borderRadius: 15,
        backgroundColor: 'white',
        margin: 5, 
        marginHorizontal: 20, 
        shadowRadius: 3, 
        shadowOpacity: 0.2, 
        shadowOffset: { width: 2, height: -1 }, 
        shadowColor: 'black',
        paddingVertical:0,
        paddingHorizontal:25
    }
})


export default TextInputComponent
