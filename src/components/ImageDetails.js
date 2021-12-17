import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const ImageDetails = ({title}) => {
    return (
        <View>
            <Image source={require('../../assets/beach.jpg')} />
            <Text>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageDetails;