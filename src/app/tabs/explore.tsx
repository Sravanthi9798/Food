import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <Text style={styles.title}>Explore 🔎</Text>

      <Text style={styles.subtitle}>Browse our grocery categories</Text>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>

      <View style={styles.categories}>
        <Category emoji="🍎" name="Fruits" />
        <Category emoji="🥦" name="Vegetables" />
        <Category emoji="🥛" name="Dairy" />
        <Category emoji="🍞" name="Bakery" />
        <Category emoji="🥩" name="Meat" />
        <Category emoji="🍪" name="Snacks" />
      </View>

      {/* Popular */}
      <Text style={styles.sectionTitle}>Popular Items</Text>

      <View style={styles.product}>
        <Text style={styles.emoji}>🍎</Text>

        <View style={styles.productInfo}>
          <Text style={styles.productName}>Fresh Apples</Text>
          <Text style={styles.productDescription}>Fresh and juicy apples</Text>
          <Text style={styles.price}>₹120</Text>
        </View>
      </View>

      <View style={styles.product}>
        <Text style={styles.emoji}>🥦</Text>

        <View style={styles.productInfo}>
          <Text style={styles.productName}>Fresh Broccoli</Text>
          <Text style={styles.productDescription}>Fresh green broccoli</Text>
          <Text style={styles.price}>₹80</Text>
        </View>
      </View>

      <View style={styles.product}>
        <Text style={styles.emoji}>🥛</Text>

        <View style={styles.productInfo}>
          <Text style={styles.productName}>Fresh Milk</Text>
          <Text style={styles.productDescription}>1 litre fresh milk</Text>
          <Text style={styles.price}>₹35</Text>
        </View>
      </View>
    </ScrollView>
  );
}

/* Category */

function Category({ emoji, name }: { emoji: string; name: string }) {
  return (
    <View style={styles.category}>
      <Text style={styles.categoryEmoji}>{emoji}</Text>

      <Text style={styles.categoryName}>{name}</Text>
    </View>
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
  },

  subtitle: {
    color: "#777777",
    fontSize: 15,
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: "700",
    marginTop: 30,
    marginBottom: 15,
  },

  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  category: {
    width: "30%",
    height: 100,
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  categoryEmoji: {
    fontSize: 35,
  },

  categoryName: {
    marginTop: 7,
    fontSize: 13,
    fontWeight: "600",
  },

  product: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },

  emoji: {
    fontSize: 50,
    marginRight: 15,
  },

  productInfo: {
    flex: 1,
  },

  productName: {
    fontSize: 17,
    fontWeight: "700",
  },

  productDescription: {
    color: "#777777",
    marginTop: 5,
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2E7D32",
    marginTop: 7,
  },
});
