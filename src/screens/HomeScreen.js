import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as firebase from "firebase";

const HomeScreen = () => {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const { email, displayName } = firebase.auth().currentUser;
    setEmail(email);
    setDisplayName(displayName);
  }, []);

  const signOutUser = () => {
    firebase.auth().signOut();
  };

  return (
    <View style={css.container}>
      <Text>Hi {displayName}!</Text>
      <Text>Your Email address : {email}</Text>

      <TouchableOpacity style={{ marginTop: 32 }} onPress={signOutUser}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
