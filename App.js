import { View, Text, StyleSheet } from "react-native";
import Greet from "./components/Greet";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>StyleSheet API</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "plum",
    padding: 60,
  },
});
