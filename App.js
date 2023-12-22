import { ActivityIndicator, Alert, Button, View } from "react-native";
import { useState } from "react";

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
      <Button
        title="Alert"
        onPress={() =>
          Alert.alert("Invalid Data", "DOB incorrect", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
            },
            {
              text: "Ok",
              onPress: () => console.log("Ok Pressed"),
            },
          ])
        }
      />
    </View>
  );
}
