import { View, StatusBar, Button } from "react-native";
import { useState } from "react";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isStatusBarVisible, setIsStatusBarVisible] = useState(true);
  const toggleStatusBar = () => {
    setIsStatusBarVisible(!isStatusBarVisible);
  };

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
      <StatusBar
        backgroundColor="gold"
        barStyle="dark-content"
        hidden={!isStatusBarVisible}
      />
      <Button
        title={isStatusBarVisible ? "Press Me" : "UnPress Me"}
        onPress={toggleStatusBar}
      />
    </View>
  );
}
