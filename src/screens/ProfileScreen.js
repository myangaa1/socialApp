import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import Fire from "../../Fire";

const ProfileScreen = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  let unsubscribe;

  useEffect(() => {
    // unsubscribe = Fire.shared.firestore
    //   .collection("users")
    //   .doc(user)
    //   .onSnapshot((doc) => {
    //     setUser(doc.data());
    //   });
  }, []);

  useEffect(() => {
    // return unsubscribe();
  });

  return (
    <View style={css.container}>
      <View style={{ marginTop: 64, alignItems: "center" }}>
        <View style={css.avatarContainer}>
          <Image
            style={css.avatar}
            source={
              user.avatar
                ? { uri: user.avatar }
                : require("../../assets/tempAvatar.jpg")
            }
          />
        </View>
        <Text style={css.name}>{user.name}</Text>
      </View>
      <View style={css.statsContainer}>
        <View style={css.stat}>
          <Text style={css.statAmount}>21</Text>
          <Text style={css.statTitle}>Posts</Text>
        </View>
        <View style={css.stat}>
          <Text style={css.statAmount}>981</Text>
          <Text style={css.statTitle}>Followers</Text>
        </View>
        <View style={css.stat}>
          <Text style={css.statAmount}>63</Text>
          <Text style={css.statTitle}>Following</Text>
        </View>
      </View>
      <Button
        onPress={() => {
          Fire.shared.signOut();
        }}
        title="Logout"
      />
    </View>
  );
};

export default ProfileScreen;

const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    shadowColor: "#151734",
    shadowRadius: 15,
    shadowOpacity: 0.4,
  },
  avatar: {
    width: 136,
    height: 136,
    borderRadius: 68,
  },
  name: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: "600",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 32,
  },
  stat: {
    alignItems: "center",
    flex: 1,
  },
  statAmount: {
    color: "#4F566D",
    fontSize: 18,
    fontWeight: "300",
  },
  statTitle: {
    color: "#C3C5CD",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 4,
  },
});
