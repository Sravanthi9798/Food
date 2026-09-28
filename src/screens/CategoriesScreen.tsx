import PageHeader from "@/components/PageHearder";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const categories = [
  { name: "Fruits", emoji: "🍎" },
  { name: "Vegetables", emoji: "🥦" },
  { name: "Dairy", emoji: "🥛" },
  { name: "Bakery", emoji: "🍞" },
  { name: "Meat", emoji: "🥩" },
  { name: "Snacks", emoji: "🍿" },
];

export default function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <PageHeader title="Categories" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <View style={styles.body}>
          <Text style={styles.subtitle}>Explore our grocery categories</Text>
        </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    paddingBottom: 20,
  },

  body: {
    paddingHorizontal: 15,
  },

  subtitle: {
    fontSize: 15,
    color: "#777",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 20,
    color: "#222",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },

  category: {
    width: "48%",
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
