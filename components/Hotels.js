import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Hotels = ({ hotel }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("HotelRoom", {
          id: hotel.id,
          name: hotel.name,
          aggregate_rating: hotel.aggregate_rating,
          adress: hotel.adress,
          smalladress: hotel.smalladress,
          cuisines: hotel.cuisines,
        })
      }
    >
      <View style={{ position: "relative" }}>
        <View style={{ margin: 10 }}>
          <Image
            style={{
              aspectRatio: 6 / 4,
              width: "100%",
              borderTopLeftRadius: 7,
              borderTopRightRadius: 7,
            }}
            source={{ uri: hotel.featured_image }}
          />

          {/* restaurant name and rating */}
          <View
            style={{
              backgroundColor: "#F5F5F5",
              paddingHorizontal: 8,
              paddingVertical: 3,
              position: "absolute",
              bottom: 150,
              right: 20,
              borderRadius: 7,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="time-outline" size={18} color="black" />
              <Text style={{ marginLeft: 4 }}>{hotel.time}</Text>
            </View>
          </View>

          {/* discount off */}

          <View
            style={{
              backgroundColor: "#007FFF",
              paddingHorizontal: 10,
              paddingVertical: 3,
              position: "absolute",
              bottom: 150,
              left: 0,
              borderTopRightRadius: 7,
              borderBottomRightRadius: 7,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
                marginBottom: 2,
              }}
            >
              {hotel.offer}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>Up to $3</Text>
          </View>

          {/* under image view block */}
          <View
            style={{
              backgroundColor: "white",
              padding: 10,
              borderBottomLeftRadius: 7,
              borderBottomRightRadius: 7,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text
                  style={{ fontSize: 16, fontWeight: "600", marginBottom: 5 }}
                >
                  {hotel.name}
                </Text>
                <Text style={{ fontSize: 12, color: "gray" }}>
                  {hotel.cuisines}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#17B169",
                  padding: 4,
                  borderRadius: 6,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    paddingRight: 5,
                    fontSize: 16,
                  }}
                >
                  {hotel.aggregate_rating}
                </Text>
                <AntDesign name="star" size={18} color="white" />
              </View>
            </View>
            {/* horizontal rule */}
            <Text
              style={{
                height: 1,
                backgroundColor: "#D3D3D3",
                textAlign: "center",
                marginVertical: 8,
              }}
            />
            {/* beneath Horizontal rule */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: "#7CB9E8",
                    padding: 4,
                    marginRight: 12,
                    borderRadius: 15,
                  }}
                >
                  <AntDesign name="doubleright" size={18} color="white" />
                </View>
                <Text style={{ fontSize: 14, fontWeight: "400" }}>
                  {hotel.no_of_Delivery} + orders placed here
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  MAX SAFETY
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  DELIVERY
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Hotels;
