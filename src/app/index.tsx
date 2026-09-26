import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/tabs/explore");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FreshCart 🛒</Text>

      <Text style={styles.subtitle}>
        Fresh groceries, delivered to your door
      </Text>

      <Text style={styles.loading}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E7D32",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    fontSize: 36,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  subtitle: {
    fontSize: 15,
    color: "#E8F5E9",
    marginTop: 10,
    textAlign: "center",
  },

  loading: {
    marginTop: 30,
    color: "#FFFFFF",
    fontSize: 14,
  },
});
