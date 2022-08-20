import { View, Text, Pressable, Modal } from "react-native";
import React from "react";
import { useContext } from "react";
import { cartItems } from "../Context";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const ViewCart = ({ name }) => {
  const { cart, setCart } = useContext(cartItems);
  const total = cart
    .map((item) => Number(item.price.replace("₹", "")))
    .reduce((prev, curr) => prev + curr, 0);
  console.log(total);
  const [modal, setModal] = useState(false);
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
