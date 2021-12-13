import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-web";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hi React Native!!!</Text>
      {/* <Button 
      onPress={() => console.log('Button pressed')}
      title="Go to component demo" /> */}
      <TouchableOpacity
        onPress={() => console.log('List pressed')}
      >
        <Text>Go to list demo</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
