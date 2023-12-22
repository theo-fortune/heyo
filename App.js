import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightBlue, styles.box]}>
        <Text>LightBlue Box</Text>
      </View>
      <View style={[styles.box, styles.lightGreen, styles.androidShadow]}>
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
    padding: 10,
  },
  box: {
    width: 250,
    height: 250,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    // * It's set to solid by default
    borderStyle: "solid",
    borderRadius: 5,
  },
  lightBlue: {
    backgroundColor: "lightblue",
  },
  lightGreen: {
    backgroundColor: "lightgreen",
  },
  // * works for iOS only
  boxShadow: {
    shadowColor: "333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4
  },
  // * works for Android only
  androidShadow: {
    elevation: 10
  }
});
