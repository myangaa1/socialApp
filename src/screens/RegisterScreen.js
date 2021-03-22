import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Fire from "../../Fire";
import UserPermissions from "../utilities/UserPermissions";
import * as ImagePicker from "expo-image-picker";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignUp = ({ navigation }) => {
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((userCredentials) => {
    //     return userCredentials.user.updateProfile({
    //       displayName: name,
    //     });
    //   })
    //   .catch((error) => setErrorMessage(error.message));
    Fire.shared.createUser({ name, email, password, avatar });
  };

  const handlePickAvatar = async () => {
    UserPermissions.getCameraPermission();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      setAvatar(result.uri);
    }
  };

  return (
    <View style={css.container}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Text style={css.greeting}>{"Hello again\nSign to get started."}</Text>
      <TouchableOpacity
        style={css.avatarPlaceholder}
        onPress={() => handlePickAvatar()}
      >
        <Image source={{ uri: avatar }} style={css.avatar} />
        <Ionicons
          name="ios-add"
          size={40}
          color="#FFF"
          style={{ marginTop: 6, marginLeft: 2 }}
        ></Ionicons>
      </TouchableOpacity>

      <View style={css.errorMessage}>
        {errorMessage && <Text style={css.error}>{errorMessage}</Text>}
      </View>

      <View style={css.form}>
        <View>
          <Text style={css.inputTitle}>Full Name</Text>
          <TextInput
            style={css.input}
            autoCapitalize="none"
            onChangeText={setName}
            value={name}
          ></TextInput>
        </View>

        <View style={{ marginTop: 32 }}>
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

      <TouchableOpacity style={css.button} onPress={() => handleSignUp()}>
        <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ alignSelf: "center", marginTop: 32 }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={{ color: "#414959", fontSize: 13 }}>
          New to SocialApp?{" "}
          <Text style={{ fontWeight: "500", color: "#E9446A" }}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

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
  back: {
    position: "absolute",
    top: 48,
    left: 32,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(21,22,48,0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: "#E1E2E6",
    borderRadius: 50,
    marginTop: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
