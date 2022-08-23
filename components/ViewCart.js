import { View, Text, Pressable, Modal, ScrollView } from "react-native";
import React from "react";
import { useContext } from "react";
import { cartItems } from "../Context";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";

const ViewCart = ({ name }) => {
  const { cart, setCart } = useContext(cartItems);
  const total = cart
    .map((item) => Number(item.price.replace("₹", "")))
    .reduce((prev, curr) => prev + curr, 0);
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);

  //playing sounds on click on place order
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const soundTimer = () => {
    navigation.navigate("OrderData", { name });
    setTimeout(() => {
      playSound();
    }, 300);
  };

  // checkout function
  const checkout = () => (
    <View
      style={{
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.5)",
        flex: 1,
      }}
    >
      <Pressable
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <AntDesign
          onPress={() => setModal(false)}
          name="closecircle"
          size={30}
          color="black"
        />
      </Pressable>
      <View
        style={{
          height: 500,
          backgroundColor: "white",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            marginTop: 8,
            color: "red",
            fontSize: 17,
          }}
        >
          {name}
        </Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <MaterialIcons name="timer" size={24} color="green" />
          <Text style={{ paddingLeft: 5, fontWeight: "600" }}>
            Delivery in 30 mins
          </Text>
        </View>
        <Text style={{ borderWidth: 1, height: 1, borderColor: "#F0F0F0" }} />
        <ScrollView>
          <View>
            {cart.map((item, index) => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 10,
                }}
                key={index}
              >
                <Text
                  style={{ color: "#e52850", fontWeight: "bold", fontSize: 16 }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{ color: "#e52850", fontWeight: "500", fontSize: 16 }}
                >
                  {item.price}
                </Text>
              </View>
            ))}
            <Text
              style={{
                borderWidth: 1,
                height: 1,
                borderColor: "#F0F0F0",
              }}
            />
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 18 }}>Offers</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 5,
                }}
              >
                <MaterialCommunityIcons
                  name="brightness-percent"
                  size={24}
                  color="blue"
                />
                <Text style={{ marginLeft: 5 }}>Select a promo code</Text>
              </View>
            </View>
            <Text
              style={{
                borderWidth: 1,
                height: 1,
                borderColor: "#F0F0F0",
              }}
            />
            <View style={{ padding: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Climate conscious delivery
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <MaterialIcons name="fastfood" size={24} color="teal" />
                <View style={{ padding: 10 }}>
                  <Text style={{ color: "green", fontSize: 16 }}>
                    Don't send cultlery, tissues and straws
                  </Text>
                  <Text style={{ fontSize: 16 }}>
                    Thank you for caring about the environment
                  </Text>
                </View>
                <Ionicons name="checkbox" size={24} color="green" />
              </View>
            </View>
            <Text
              style={{
                borderWidth: 1,
                height: 1,
                borderColor: "#F0F0F0",
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
              }}
            >
              <FontAwesome5 name="leaf" size={24} color="#008080" />
              <Text style={{ fontSize: 16, marginLeft: 15 }}>
                We fund environmental projects to offset carbon footprint of out
                deliveries
              </Text>
            </View>
            <Text
              style={{
                borderWidth: 1,
                height: 1,
                borderColor: "#F0F0F0",
              }}
            />
            <View style={{ backgroundColor: "#f0e6bc" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <Text style={{ fontSize: 16 }}>Item Total</Text>
                <Text>₹{total}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "red" }}
                >
                  Delivery Fee
                </Text>
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "red" }}
                >
                  ₹50
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "red" }}>
            Grand total
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "red" }}>
            ₹{total + 50}
          </Text>
        </View>

        <Pressable
          onPress={() => {
            setModal(false);
            setCart([]);
            soundTimer();
          }}
          style={{ backgroundColor: "red", padding: 10 }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Place Order
          </Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <>
      {modal && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModal(!modal);
          }}
        >
          {checkout()}
        </Modal>
      )}
      <View>
        {total === 0 ? null : (
          <Pressable
            onPress={() => setModal(true)}
            style={{
              backgroundColor: "#fd5c63",

              borderRadius: 8,
              position: "absolute",
              bottom: 40,
              left: 120,
              padding: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              ViewCart• ₹{total}
            </Text>
          </Pressable>
        )}
      </View>
    </>
  );
};

export default ViewCart;
