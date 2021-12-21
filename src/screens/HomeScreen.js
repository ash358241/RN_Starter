import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-web";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hi React Native!</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to component demo" />
      <Button 
      onPress={() => navigation.navigate("List")}
      title="Go to list demo"
      />
      <Button 
      title="Go to image demo"
      onPress={() => navigation.navigate("Image")}
      />
      <Button 
      title="Go to counter demo"
      onPress={() => navigation.navigate("Counter")}
      />
      <Button 
      title="Go to color demo"
      onPress={() => navigation.navigate("Color")}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
