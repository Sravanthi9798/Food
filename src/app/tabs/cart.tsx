import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 My Cart</Text>

      <Text style={styles.emptyEmoji}>🛍️</Text>

      <Text style={styles.emptyTitle}>Your cart is empty</Text>

      <Text style={styles.emptyText}>
        Add some fresh groceries to your cart.
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Start Shopping</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    position: "absolute",
    top: 25,
    left: 20,
    fontSize: 28,
    fontWeight: "700",
  },

  emptyEmoji: {
    fontSize: 70,
    marginBottom: 20,
  },

  emptyTitle: {
    fontSize: 22,
    fontWeight: "700",
  },

  emptyText: {
    color: "#777777",
    marginTop: 8,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#2E7D32",
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 10,
    marginTop: 25,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 15,
  },
});
