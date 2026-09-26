import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Hello 👋</Text>

      <Text style={styles.subtitle}>What do you want to buy today?</Text>

      {/* Search */}
      <TextInput placeholder="Search groceries..." style={styles.search} />

      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Fresh Groceries</Text>

        <Text style={styles.bannerText}>
          Get fresh products delivered to your home
        </Text>

        <Pressable style={styles.shopButton}>
          <Text style={styles.shopText}>Shop Now</Text>
        </Pressable>
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Category name="Fruits" emoji="🍎" />
        <Category name="Vegetables" emoji="🥦" />
        <Category name="Dairy" emoji="🥛" />
        <Category name="Bakery" emoji="🍞" />
      </ScrollView>

      {/* Products */}
      <Text style={styles.sectionTitle}>Popular Products</Text>

      <View style={styles.products}>
        <Product name="Fresh Apples" price="₹120" emoji="🍎" />

        <Product name="Bananas" price="₹60" emoji="🍌" />

        <Product name="Tomatoes" price="₹45" emoji="🍅" />

        <Product name="Milk" price="₹35" emoji="🥛" />
      </View>
    </ScrollView>
  );
}

/* Category Component */

function Category({ name, emoji }: { name: string; emoji: string }) {
  return (
    <View style={styles.category}>
      <Text style={styles.categoryEmoji}>{emoji}</Text>

      <Text style={styles.categoryName}>{name}</Text>
    </View>
  );
}

/* Product Component */

function Product({
  name,
  price,
  emoji,
}: {
  name: string;
  price: string;
  emoji: string;
}) {
  return (
    <View style={styles.product}>
      <Text style={styles.productEmoji}>{emoji}</Text>

      <Text style={styles.productName}>{name}</Text>

      <View style={styles.productBottom}>
        <Text style={styles.price}>{price}</Text>

        <Pressable style={styles.addButton}>
          <Text style={styles.addText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 20,
  },

  subtitle: {
    color: "#777",
    marginTop: 5,
    fontSize: 15,
  },

  search: {
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    padding: 15,
    marginTop: 20,
    fontSize: 16,
  },

  banner: {
    backgroundColor: "#E8F5E9",
    borderRadius: 18,
    padding: 20,
    marginTop: 20,
  },

  bannerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2E7D32",
  },

  bannerText: {
    color: "#555",
    marginTop: 8,
    fontSize: 14,
  },

  shopButton: {
    backgroundColor: "#2E7D32",
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
    alignSelf: "flex-start",
  },

  shopText: {
    color: "#fff",
    fontWeight: "600",
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: "700",
    marginTop: 25,
    marginBottom: 15,
  },

  category: {
    width: 90,
    height: 90,
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  categoryEmoji: {
    fontSize: 30,
  },

  categoryName: {
    marginTop: 5,
    fontSize: 13,
  },

  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  product: {
    width: "48%",
    backgroundColor: "#F8F8F8",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },

  productEmoji: {
    fontSize: 60,
    textAlign: "center",
  },

  productName: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
  },

  productBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },

  price: {
    fontSize: 17,
    fontWeight: "700",
  },

  addButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#2E7D32",
    alignItems: "center",
    justifyContent: "center",
  },

  addText: {
    color: "#fff",
    fontSize: 22,
  },
});
