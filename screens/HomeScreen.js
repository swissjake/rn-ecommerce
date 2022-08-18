import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Categories from "../components/Categories";
import ItemComponent from "../components/ItemComponent";
import hotels from "../data/hotels";
import Hotels from "../components/Hotels";

console.log(hotels);

const HomeScreen = () => {
  return (
    <ScrollView
      style={{ padding: 10, paddingTop: 47, backgroundColor: "#F0F0F0" }}
    >
      <View style={styles.inputContainer}>
        <AntDesign name="search1" size={20} color="#E52B50" />
        <TextInput
          style={{ paddingLeft: 7, flex: 1 }}
          placeholder="Restaurant name, cuisine, or a dish"
        />
      </View>

      <Categories />

      <Pressable>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={[styles.image, { margin: 10 }]}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU",
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: "https://cdn.businesstraveller.com/wp-content/uploads/fly-images/1002269/zomato-infinity-dining-916x516-1-916x516.jpg",
            }}
          />
        </View>
      </Pressable>
      <ItemComponent />
      {hotels.map((item) => (
        <Hotels hotel={item} key={item.id} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#D8D8D8",
    padding: 7,
    borderRadius: 8,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 7,
  },
});
