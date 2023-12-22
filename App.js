import { View } from "react-native";
import { useState } from "react";
import Greet from "./components/Greet";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "plum",
        padding: 60,
      }}
    >
      <Greet name={"Bruce Wayne"}/>
      <Greet name={"Clark Kent"}/>
    </View>
  );
}
