import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";

const items = [
  {
    id: "1",
    name: "Fastest delivery",
  },
  {
    id: "2",
    name: "Rating 4.0+",
  },
  {
    id: "3",
    name: "Offers",
  },
  {
    id: "4",
    name: "Cuisines",
  },
  {
    id: "5",
    name: "MAX Safety",
  },
  {
    id: "6",
    name: "Pro",
  },
];

const Categories = () => {
  return (
    <View style={{ marginTop: 13 }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={items}
        renderItem={({ item, index }) => (
          <Pressable
            style={{
              backgroundColor: "#E25822",
              marginLeft: index === 0 ? 0 : 15,
              padding: 7,
              borderRadius: 6,
            }}
          >
            <Text style={{ fontSize: "14", color: "white" }}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Categories;
