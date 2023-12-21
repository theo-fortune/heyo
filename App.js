import { View, Button, Pressable, Text, Image, ScrollView } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <Button
          title="Press"
          onPress={() => {
            console.log("Button Pressed");
          }}
          color="midnightblue"
        />
        <Pressable onPress={() => console.log("image pressed")}>
          <Image source={logoImg} style={{ width: 300, height: 300 }} />
        </Pressable>
        <Pressable>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere iure dolores inventore mollitia incidunt vero earum provident. Voluptatum delectus quas explicabo, voluptatibus quo voluptatem fugiat alias animi? Ab minima magni mollitia dolor nihil consectetur sint error a, id maxime nisi quisquam excepturi placeat ducimus qui quod tempora quasi minus quo optio deleniti atque odit. Dolorum similique eum nobis iure, voluptatem ratione, fuga facere at maiores voluptatum in, quam adipisci inventore impedit vel magnam facilis. Voluptatem voluptas sapiente ullam cupiditate voluptatibus impedit, sint velit maxime doloremque ducimus accusamus libero ipsam deserunt vero, animi ipsum veritatis eius accusantium voluptate unde, sunt ab nisi! Odio in at molestiae repellat nam pariatur? Dolores, deleniti at. Laborum officiis ea, quod velit est assumenda quam asperiores.
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
