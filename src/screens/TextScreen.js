import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    return (
        <View>
            <TextInput style={styles.input} autoCapitalize='none' autoCorrect={false} value={name} onChangeText={newText => setName(newText)} />
            <Text>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        padding: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen;