import Button from "@/components/Button";
import PageHeader from "@/components/PageHearder";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function CartScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <PageHeader title="My Cart" />

      <View style={styles.subContainer}>
        <Text style={styles.emptyTitle}>Your cart is empty</Text>

        <Text style={styles.emptyText}>
          Add some fresh groceries to your cart.
        </Text>
        <Button
          title="Start Shopping"
          onPress={() => router.push("/products")}
          style={styles.cartShoppingButton}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  subContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
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
    fontSize: 18,
    fontWeight: "600",
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
  cartShoppingButton: {
    backgroundColor: "#2E7D32",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 30,
  },
});
