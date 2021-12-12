import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'Hello World!';
    const greetingYou = <Text>Hello you!</Text>
    return (
        <View>
            <Text style={styles.textStyle}>This is components screen</Text>
            <Text style={styles.textStyle}>{greeting}</Text>
            {greetingYou}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentsScreen;