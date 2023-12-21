import { View, Button, Pressable, Text, Modal, ScrollView } from "react-native";
import { useState } from "react";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <Button
          title="Press"
          onPress={() => {
            setIsModalVisible(true);
          }}
          color="midnightblue"
        />
        <Modal
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
          animationType="slide"
          presentationStyle="pageSheet"
        >
          <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
            <Text>Modal Content</Text>
            <Button
              color="midnightblue"
              title="Close"
              onPress={() => {
                setIsModalVisible(false);
              }}
            />
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}
