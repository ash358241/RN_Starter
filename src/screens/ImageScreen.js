import React from 'react';
import { View } from 'react-native';
import ImageDetails from '../components/ImageDetails';

const ImageScreen = () => {
    return (
       <View>
           <ImageDetails title="forest" imageSource={require("../../assets/forest.jpg")} imgScore="7" / >
           <ImageDetails title="beach" imageSource={require("../../assets/beach.jpg")} imgScore="8" />
           <ImageDetails title="mountain" imageSource={require("../../assets/mountain.jpg")} imgScore="9" />
       </View>
    );
};

export default ImageScreen;