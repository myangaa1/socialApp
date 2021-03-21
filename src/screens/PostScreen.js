import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Fire from "../../Fire";

const firebase = require("firebase");
require("firebase/firestore");

const PostScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    getPhotoPermissions();
  }, []);

  const getPhotoPermissions = async () => {
    //if (Constants.platform.ios) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    if (status != "granted") {
      alert("We need permissions to access your comara roll");
    }
    //}
  };

  const handlePost = () => {
    Fire.shared
      .addPost({ text: text.trim(), localUri: image })
      .then((ref) => {
        setText("");
        setImage(null);
        navigation.goBack();
      })
      .catch((error) => {
        alert(error);
      });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView style={css.container}>
      <View
        style={{ ...css.header, marginTop: Platform.OS !== "ios" ? 25 : 0 }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="md-arrow-back" size={24} color="#D8D9DB"></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePost()}>
          <Text style={{ fontWeight: "500" }}>Post</Text>
        </TouchableOpacity>
      </View>

      <View style={css.inputContainer}>
        <Image
          source={require("../../assets/tempAvatar.jpg")}
          style={css.avatar}
        ></Image>
        <TextInput
          autoFocus={true}
          multiline={true}
          numberOfLines={4}
          style={{ flex: 1 }}
          placeholder="Want to share something?"
          onChangeText={setText}
          value={text}
        ></TextInput>
      </View>

      <TouchableOpacity style={css.photo} onPress={() => pickImage()}>
        <Ionicons name="md-camera" size={32} color="#D8D9DB"></Ionicons>
      </TouchableOpacity>

      <View style={{ marginHorizontal: 32, marginTop: 32, height: 150 }}>
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: "100%" }}
        ></Image>
      </View>
    </SafeAreaView>
  );
};

export default PostScreen;

const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#D8D9DB",
  },
  inputContainer: {
    margin: 32,
    flexDirection: "row",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  photo: {
    alignItems: "flex-end",
    marginHorizontal: 32,
  },
});
