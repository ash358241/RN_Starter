import React from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
    return (
        <View>
            <ColorCounter color="red"></ColorCounter>
            <ColorCounter color="blue"></ColorCounter>
            <ColorCounter color="green"></ColorCounter>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;