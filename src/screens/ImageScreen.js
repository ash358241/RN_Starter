import React from 'react';
import { View } from 'react-native';
import ImageDetails from '../components/ImageDetails';

const ImageScreen = () => {
    return (
       <View>
           <ImageDetails title="forest"/>
           <ImageDetails title="beach"/>
           <ImageDetails title="mountain"/>
       </View>
    );
};

export default ImageScreen;