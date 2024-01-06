import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const Cat = (props) => {
    <View>
      <Text> 😺 </Text>
      <Text> Meow! I am {props.name}! </Text>
    </View>;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text> Hello! 😹</Text>
        <StatusBar style="auto" />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue="Type a cat name here!"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
