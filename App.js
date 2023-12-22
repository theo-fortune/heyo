import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightBlue]}>
        <Text>LightBlue Box</Text>
      </View>
      <View style={[styles.box, styles.lightGreen]}>
        <Text>LightGreen Box</Text>
      </View>
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
  box: {
    width: 100,
    height: 100,
    padding: 10,
  },
  lightBlue: {
    backgroundColor: "lightblue",
  },
  lightGreen: {
    backgroundColor: "lightgreen",
  },
});
