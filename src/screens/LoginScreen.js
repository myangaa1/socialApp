import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import * as firebase from "firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("namjka@mail.mn");
  const [password, setPassword] = useState("123456");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <View style={css.container}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Text style={css.greeting}>{"Hello again\nWelcome back."}</Text>

      <View style={css.errorMessage}>
        {errorMessage && <Text style={css.error}>{errorMessage}</Text>}
      </View>

      <View style={css.form}>
        <View>
          <Text style={css.inputTitle}>Email address</Text>
          <TextInput
            style={css.input}
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
          ></TextInput>
        </View>

        <View style={{ marginTop: 32 }}>
          <Text style={css.inputTitle}>Password</Text>
          <TextInput
            style={css.input}
            secureTextEntry
            autoCapitalize="none"
            onChangeText={setPassword}
            value={password}
          ></TextInput>
        </View>
      </View>

      <TouchableOpacity style={css.button} onPress={handleLogin}>
        <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ alignSelf: "center", marginTop: 32 }}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={{ color: "#414959", fontSize: 13 }}>
          New to SocialApp?{" "}
          <Text style={{ fontWeight: "500", color: "#E9446A" }}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  error: {
    color: "#E9446A",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase",
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D",
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
});
