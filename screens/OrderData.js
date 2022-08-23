import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import moment from "moment";

const OrderData = () => {
  const [tip, setTip] = useState(0);
  const route = useRoute();
  const navigation = useNavigation();
  const time = moment().format("LTS");
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View
        style={{
          backgroundColor: "#f0e6bc",
          borderBottomWidth: 2,
          borderBottomColor: "#D3D3D3",
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          {route.params.name} has accepted your order at {time}
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View
          style={{
            backgroundColor: "#F9629F",
            flexDirection: "row",
            width: 200,
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          <MaterialIcons name="timer" size={24} color="#fff" />
          <Text
            style={{
              color: "white",
              fontSize: 16,
              marginLeft: 8,
              fontWeight: "600",
            }}
          >
            Delivery in 30mins
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: 5,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            marginRight: 10,
            color: "tomato",
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          Food preparation will begin shortly
        </Text>
        <MaterialCommunityIcons
          name="food-fork-drink"
          size={24}
          color="tomato"
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Image
          style={{
            width: 200,
            height: 200,
            backgroundColor: "white",
            marginVertical: 16,
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpDX04DyRkpYOMZbKFWf9DFV94SrafyNzpwG7nXG2QFcUqTGWmC0ISoM2uU5SUK4bQJw&usqp=CAU",
          }}
        />
      </View>
      <View style={{ borderWidth: 1, height: 1, borderColor: "#D3D3D3" }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <MaterialIcons name="directions-bike" size={30} color="red" />
        <View style={{ marginLeft: 15 }}>
          <Text style={{ color: "tomato", fontSize: 16, fontWeight: "500" }}>
            4 Vallets near the restaurant
          </Text>
          <Text style={{ fontSize: 16 }}>Anyone will pick your order</Text>
        </View>
      </View>
      <View style={{ borderWidth: 1, height: 1, borderColor: "#D3D3D3" }} />

      <View style={{ padding: 20, flexDirection: "row" }}>
        <FontAwesome5 name="hand-holding-heart" size={28} color="#ff0080" />
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{ fontSize: 19, fontWeight: "bold", paddingHorizontal: 2 }}
          >
            Tip your hunger Saviour
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#696969",
              marginRight: 10,
              paddingHorizontal: 2,
            }}
          >
            Thank your delivery partner for helping you stay safe
            indoors.Support them through these tough times with a tip
          </Text>
          <Pressable
            style={{
              paddingTop: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setTip(30)}
              style={{
                backgroundColor: "#F5F5F5",
                marginHorizontal: 10,
                paddingHorizontal: 10,
                borderRadius: 7,
              }}
            >
              <Text
                style={{ padding: 10, color: "#002D62", fontWeight: "bold" }}
              >
                ₹30
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setTip(50)}
              style={{
                alignItems: "center",
                backgroundColor: "#F5F5F5",
                marginHorizontal: 10,
                borderRadius: 7,
                // paddingHorizontal: 10,
              }}
            >
              <Text
                style={{ padding: 4, color: "#002D62", fontWeight: "bold" }}
              >
                ₹50
              </Text>
              <Text
                style={{
                  backgroundColor: "orange",
                  paddingHorizontal: 10,
                  fontSize: 14,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Most Tipped
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setTip(70)}
              style={{
                backgroundColor: "#F5F5F5",
                marginHorizontal: 10,
                paddingHorizontal: 10,
                borderRadius: 7,
              }}
            >
              <Text
                style={{ padding: 10, color: "#002D62", fontWeight: "bold" }}
              >
                ₹70
              </Text>
            </TouchableOpacity>
          </Pressable>
        </View>
      </View>
      {tip ? (
        <View>
          <Text
            style={{
              color: "#034694",
              padding: 10,
              marginLeft: 10,
              marginRight: 10,
              fontSize: 16,
              fontWeight: "600",
              fontFamily: "sans-serif-medium",
            }}
          >
            please pay {"₹"}
            {tip} to your delivery agent at the time of delivery
          </Text>
          <TouchableOpacity
            onPress={() => setTip(0)}
            activeOpacity={0.7}
            style={{
              padding: 10,
              marginLeft: 10,
              marginRight: 10,
              position: "absolute",
              top: 40,

              paddingBottom: 40,
            }}
          >
            <Text style={{ color: "red", fontSize: 14, fontWeight: "700" }}>
              (Cancel)
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <Pressable
        onPress={() => navigation.navigate("HomeScreen")}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "teal",
            width: 150,
            padding: 10,
            borderRadius: 8,
          }}
        >
          <MaterialIcons name="arrow-back" size={24} color="black" />
          <Text style={{ fontSize: 16, marginLeft: 10 }}>Go back</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default OrderData;
