import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import moment from "moment";

const posts = [
  {
    id: "1",
    name: "Koe Mcky",
    text: "lorem bjdkbdsk bb skjbksdbdskbbb bkbksb k bkb k bkfb kf",
    timestamp: 1569109273726,
    avatar: require("../../assets/tempAvatar.jpg"),
    image: require("../../assets/tempImage1.jpg"),
  },
  {
    id: "2",
    name: "Koe Mcky",
    text: "lorem bjdkbdsk bb skjbksdbdskbbb bkbksb k bkb k bkfb kf",
    timestamp: 1569109273726,
    avatar: require("../../assets/tempAvatar.jpg"),
    image: require("../../assets/tempImage1.jpg"),
  },
  {
    id: "3",
    name: "Koe Mcky",
    text: "lorem bjdkbdsk bb skjbksdbdskbbb bkbksb k bkb k bkfb kf",
    timestamp: 1569109273726,
    avatar: require("../../assets/tempAvatar.jpg"),
    image: require("../../assets/tempImage1.jpg"),
  },
  {
    id: "4",
    name: "Koe Mcky",
    text: "lorem bjdkbdsk bb skjbksdbdskbbb bkbksb k bkb k bkfb kf",
    timestamp: 1569109273726,
    avatar: require("../../assets/tempAvatar.jpg"),
    image: require("../../assets/tempImage1.jpg"),
  },
];

const HomeScreen = () => {
  const renderPost = (post) => {
    return (
      <View style={css.feedItem}>
        <Image source={post.avatar} style={css.avatar} />
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={css.name}>{post.name}</Text>
              <Text style={css.timestamp}>
                {moment(post.timestamp).fromNow()}
              </Text>
            </View>

            <Feather name="more-horizontal" size={24} color="#73788B" />
          </View>

          <Text style={css.post}>{post.text}</Text>

          <Image style={css.postImage} source={post.image} resizeMode="cover" />

          <View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-heart" size={24} color="#73788B" />
            <Ionicons name="ios-chatbox" size={24} color="#73788B" />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={css.container}>
      <View style={css.header}>
        <Text style={css.headerTitle}>Feed</Text>
      </View>

      <FlatList
        style={css.feed}
        data={posts}
        renderItem={({ item }) => renderPost(item)}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

export default HomeScreen;

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFECF4",
  },
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EBECF4",
    shadowColor: "#454D65",
    shadowOffset: { height: 5 },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  feed: {
    marginHorizontal: 16,
  },
  feedItem: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 8,
    flexDirection: "row",
    marginVertical: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16,
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
    color: "#454D65",
  },
  timestamp: {
    fontSize: 11,
    color: "#C4C6CE",
    marginTop: 4,
  },
  post: {
    marginTop: 16,
    fontSize: 14,
    color: "#838899",
  },
  postImage: {
    width: undefined,
    height: 150,
    borderRadius: 5,
    marginVertical: 16,
  },
});
