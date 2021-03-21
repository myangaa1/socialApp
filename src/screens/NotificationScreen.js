import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NotificationScreen = () => {
  return (
    <View style={css.container}>
      <Text>NotificationScreen...</Text>
    </View>
  );
};

export default NotificationScreen;

const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
