// Allow users to set the number of upcoming launches at launch, provide info about App
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default (AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Settings</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
