import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          aut nihil, reiciendis dicta ullam, debitis a minima mollitia maxime
          magni praesentium quo, est voluptatibus porro impedit nesciunt?
          Eveniet voluptatibus pariatur ad quo eligendi quaerat tempore
          explicabo possimus commodi quod maiores, minus dignissimos culpa
          architecto praesentium. Nisi ea ab, ullam excepturi ex ipsam provident
          obcaecati corporis numquam, eum repellat maxime ipsum quod, recusandae
          cum voluptas earum nam sit! Quam rem deleniti ratione voluptatibus
          adipisci. Eum unde iusto in! Hic sequi quidem doloribus laudantium
          tempore? Officia minus unde architecto possimus fugit veniam vel rerum
          inventore enim, maiores asperiores quisquam. Tempora, accusantium
          porro.
        </Text>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </ScrollView>
    </View>
  );
}
