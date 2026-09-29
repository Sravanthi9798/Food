import { View, Text, StyleSheet } from "react-native";

export default function OrderAgain() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Again</Text>
      <Text>Your previous orders will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },
});