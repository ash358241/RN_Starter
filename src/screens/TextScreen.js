import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View>
            <TextInput style={styles.input} autoCapitalize='none' autoCorrect={false} value={name} onChangeText={newText => setName(newText)} />
            <TextInput style={styles.input} value={password} onChangeText={newValue => setPassword(newValue)} />
            <Text>{name}</Text>
            {
                password.length < 5 ? <Text>Password must be 5 characters</Text> : null
            }
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