import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const MenuItems = ({ item, cart, setCart }) => {
  const [addQuantity, setAddQuantity] = useState(0);

  const handleAddQuantity = () => {
    if (addQuantity < 15) {
      setAddQuantity(addQuantity + 1);
    } else {
      setAddQuantity(15);
    }
  };
  const handleMinusQuantity = () => {
    if (addQuantity <= 0) {
      setAddQuantity(0);
    } else {
      setAddQuantity(addQuantity - 1);
    }
  };

  return (
    <View
      style={{
        marginBottom: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>{item.name}</Text>
        <Text style={{ marginTop: 5 }}>{item.price}</Text>
        <View style={{ flexDirection: "row", marginTop: 7 }}>
          <Text
            style={{
              padding: 3,
              borderRadius: 4,
            }}
          >
            {[0, 0, 0, 0, 0].map((_, i) => (
              <FontAwesome
                key={i}
                style={{ margin: 2, marginHorizontal: 3 }}
                name={i < Math.floor(item.star) ? "star" : "star-o"}
                size={15}
                color="#FFD700"
              />
            ))}
          </Text>
          <View
            style={{
              backgroundColor: "#ffcccb",
              paddingVertical: 3,
              paddingHorizontal: 6,
              marginLeft: 10,
              borderRadius: 6,
            }}
          >
            <Text style={{ textAlign: "center" }}>
              {item.mustTry || item.bestSeller}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: "#D3D3D3",
              padding: 5,
              borderRadius: "50%",
            }}
          >
            <FontAwesome5 name="heart" size={18} color="#ff1493" />
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: "#D3D3D3",
              padding: 5,
              borderRadius: "50%",
              marginLeft: 10,
            }}
          >
            <Ionicons name="arrow-redo-outline" size={18} color="#ff1493" />
          </View>
        </View>
      </View>

      {/* right side View */}
      <View>
        <View style={{ marginRight: 10 }}>
          <Image
            style={{
              width: 150,
              height: 120,
              borderRadius: 10,
              position: "relative",
            }}
            source={{ uri: item.image }}
          />
          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#ff1493",
                width: 100,
                justifyContent: "space-between",
                paddingVertical: 6,
                alignItems: "center",
                paddingHorizontal: 10,
                position: "absolute",
                left: 25,
                bottom: -15,
                borderRadius: 8,
              }}
            >
              <Pressable
                onPress={() => {
                  setCart(cart.filter((p) => p.id !== item.id));
                  handleMinusQuantity();
                }}
              >
                <AntDesign
                  style={{ fontWeight: "bold", color: "white" }}
                  name="minus"
                  size={20}
                  color="black"
                />
              </Pressable>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                {addQuantity}
              </Text>
              <AntDesign
                onPress={() => {
                  setCart([...cart, item]);
                  handleAddQuantity();
                }}
                style={{ fontWeight: "bold", color: "white" }}
                name="plus"
                size={20}
                color="white"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MenuItems;

const styles = StyleSheet.create({});
