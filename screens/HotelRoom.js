import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import MenuItems from "../components/MenuItems";
import menuData from "../data/menuData";
import { useContext } from "react";
import { cartItems } from "../Context";
import ViewCart from "../components/ViewCart";

const deliveries = [
  {
    icon: <MaterialCommunityIcons name="bike-fast" size={24} color="gray" />,
    text1: "Mode",
    text2: "Delivery",
  },
  {
    icon: <MaterialIcons name="timer" size={20} color="gray" />,
    text1: "Time",
    text2: "30mins or free",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="brightness-percent"
        size={24}
        color="blue"
      />
    ),
    text1: "Offers",
    text2: "View all",
  },
];

const HotelRoom = () => {
  const route = useRoute();
  const { cart, setCart } = useContext(cartItems);
  const navigation = useNavigation();
  console.log(cart, "carts added");
  return (
    <>
      <ScrollView style={{ paddingTop: 47 }}>
        {/* up Icons */}
        <Pressable
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("HomeScreen")}
            style={{
              backgroundColor: "#002D62",
              borderRadius: "50%",
              padding: 1,
            }}
          >
            <MaterialIcons name="keyboard-arrow-left" size={26} color="white" />
          </Pressable>
          <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather
              style={{ marginRight: 15 }}
              name="camera"
              size={28}
              color="black"
            />
            <Feather
              style={{ marginRight: 15 }}
              name="bookmark"
              size={28}
              color="black"
            />
            <Ionicons
              style={{ marginRight: 15 }}
              name="arrow-redo-outline"
              size={18}
              color="black"
            />
          </Pressable>
        </Pressable>

        {/* details */}
        <View style={{ marginLeft: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 25,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {route.params.name}
            </Text>
            <View
              style={{
                backgroundColor: "#17B169",
                flexDirection: "row",
                paddingHorizontal: 6,
                paddingVertical: 3,
                borderTopLeftRadius: 7,
                borderBottomLeftRadius: 7,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "white" }}>
                {route.params.aggregate_rating}
              </Text>
              <AntDesign
                style={{ marginLeft: 4 }}
                name="star"
                size={18}
                color="white"
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ paddingVertical: 5 }}>
                {route.params.cuisines}
              </Text>
              <Text style={{ color: "gray" }}>{route.params.smalladress}</Text>
            </View>
            <View
              style={{
                backgroundColor: "#F9629F",
                paddingHorizontal: 6,
                paddingVertical: 3,
                borderTopLeftRadius: 7,
                borderBottomLeftRadius: 7,
                marginTop: 3,
              }}
            >
              <Text
                style={{ fontSize: 14, fontWeight: "bold", color: "white" }}
              >
                30
              </Text>
              <Text
                style={{ fontSize: 14, fontWeight: "bold", color: "white" }}
              >
                Photos
              </Text>
            </View>
          </View>

          {/* delivery mode */}
          <View style={{ flexDirection: "row", marginTop: 25 }}>
            {deliveries.map((delivery, index) => (
              <View
                style={{ flexDirection: "row", marginRight: 12 }}
                key={index}
              >
                <View
                  style={{
                    backgroundColor: "#D8D8D8",
                    paddingHorizontal: 6,
                    paddingVertical: 4,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {delivery.icon}
                </View>
                <View style={{ marginLeft: 7 }}>
                  <Text style={{ color: "gray" }}>
                    {delivery.text1.toUpperCase()}
                  </Text>
                  <Text>{delivery.text2}</Text>
                </View>
              </View>
            ))}
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 10,
              backgroundColor: "#D8D8D8",
              marginTop: 20,
              paddingHorizontal: 15,
              paddingVertical: 6,
              borderRadius: 7,
            }}
          >
            <Fontisto name="motorcycle" size={24} color="black" />
            <Text style={{ marginLeft: 15, fontSize: 15 }}>
              #30 additional distance fee
            </Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Full Menu</Text>
            <Text
              style={{
                height: 2,
                borderWidth: 2,
                borderColor: "#ff1493",
                width: 75,
                marginTop: 2,
              }}
            />
          </View>
          {menuData.map((item, i) => (
            <MenuItems
              item={item}
              cart={cart}
              setCart={setCart}
              key={item.id}
            />
          ))}
        </View>
      </ScrollView>

      <ViewCart name={route.params.name} />
    </>
  );
};

export default HotelRoom;

const styles = StyleSheet.create({});
