import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyleOne}>child 1</Text>
            <Text style={styles.textStyleTwo}>child 2</Text>
            <Text style={styles.textStyleThree}>child 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        // alignItems: 'center',
        flexDirection: 'row',
        minHeight: 200,
        justifyContent: 'space-between',
        position: 'relative',
    },
    textStyleOne: {
        borderWidth: 3,
        borderColor: 'blue',
        width: 100,
        height: 100
       
    },
    textStyleTwo: {
        borderWidth: 3,
        borderColor: 'pink',
        width: 100,
        height: 100,
        alignSelf: 'flex-end',
    },
    textStyleThree: {
        borderWidth: 3,
        borderColor: 'grey',
        width: 100,
        height: 100,
    }
})

export default BoxScreen;