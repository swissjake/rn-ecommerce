import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { BasketContext } from "./Context";
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <BasketContext>
      <StackNavigator />
      <StatusBar style="auto" />
    </BasketContext>
  );
}
