import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const ImageDetails = ({title, imageSource, imgScore}) => {
    return (
        <View>
            <Image source={imageSource} />
            <Text>{title}</Text>
            <Text>Image Score: {imgScore}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageDetails;