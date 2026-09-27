import { ScrollView, StyleSheet, Text, View } from "react-native";

const categories = [
  { name: "Fruits", emoji: "🍎" },
  { name: "Vegetables", emoji: "🥦" },
  { name: "Dairy", emoji: "🥛" },
  { name: "Bakery", emoji: "🍞" },
  { name: "Meat", emoji: "🥩" },
  { name: "Fish", emoji: "🐟" },
  { name: "Snacks", emoji: "🍿" },
  { name: "Beverages", emoji: "🥤" },
  { name: "Frozen Foods", emoji: "🧊" },
  { name: "Rice & Grains", emoji: "🍚" },
  { name: "Spices", emoji: "🌶️" },
  { name: "Household", emoji: "🧹" },
];

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Categories</Text>

      <Text style={styles.subtitle}>Explore our grocery categories</Text>

      <View style={styles.grid}>
        {categories.map((category) => (
          <View key={category.name} style={styles.category}>
            <View style={styles.iconContainer}>
              <Text style={styles.emoji}>{category.emoji}</Text>
            </View>

            <Text style={styles.categoryName}>{category.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 20,
    color: "#222",
  },

  subtitle: {
    fontSize: 15,
    color: "#777",
    marginTop: 6,
    marginBottom: 25,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  category: {
    width: "31%",
    backgroundColor: "#E8F5E9",
    borderRadius: 14,
    paddingVertical: 16,
    marginBottom: 18,
    alignItems: "center",
  },

  iconContainer: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  emoji: {
    fontSize: 42,
  },

  categoryName: {
    marginTop: 12,
    fontSize: 12,
    fontWeight: "600",
    color: "#2E7D32",
  },
});
