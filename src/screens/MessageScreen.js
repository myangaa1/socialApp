import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MessageScreen = () => {
  return (
    <View style={css.container}>
      <Text>Message screen...</Text>
    </View>
  );
};

export default MessageScreen;

const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
