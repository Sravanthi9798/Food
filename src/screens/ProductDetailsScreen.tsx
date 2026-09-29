import Button from "@/components/Button";
import { products } from "@/data/products";
import { router, useLocalSearchParams } from "expo-router";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const product = products.find((item) => item.id === id);

  // If product doesn't exist
  if (!product) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>Product not found</Text>

        <Button title="Go Back" onPress={() => router.back()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.image }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Product Information */}
        <View style={styles.details}>
          {/* Category */}
          <Text style={styles.category}>{product.category}</Text>

          {/* Product Name */}
          <Text style={styles.name}>{product.name}</Text>

          {/* Unit */}
          <Text style={styles.unit}>{product.unit}</Text>

          {/* Price + Offer */}
          <View style={styles.priceRow}>
            <Text style={styles.price}>₹{product.price}</Text>

            {product.offer && <Text style={styles.offer}>{product.offer}</Text>}
          </View>

          {/* Description */}
          <Text style={styles.sectionTitle}>Description</Text>

          <Text style={styles.description}>{product.description}</Text>

          {/* Stock */}
          <View style={styles.stockContainer}>
            <Text style={styles.stockLabel}>Availability</Text>

            <Text style={styles.stock}>
              {product.stock > 0
                ? `${product.stock} items available`
                : "Out of stock"}
            </Text>
          </View>

          {/* Quantity */}
          <View style={styles.quantitySection}>
            <Text style={styles.sectionTitle}>Quantity</Text>

            <View style={styles.quantityContainer}>
              <Pressable style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>−</Text>
              </Pressable>

              <Text style={styles.quantity}>1</Text>

              <Pressable style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </Pressable>
            </View>
          </View>

          {/* Add to Cart */}
          <Button
            title="Add to Cart"
            onPress={() => {
              // Cart functionality will be added later
            }}
            style={styles.cartButton}
          />
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
    paddingBottom: 30,
  },

  // Header
  header: {
    height: 65,
    backgroundColor: "#E8F5E9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  backText: {
    fontSize: 32,
    color: "#2E7D32",
    lineHeight: 35,
    marginTop: -3,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222222",
  },

  headerPlaceholder: {
    width: 40,
  },

  // Image
  imageContainer: {
    height: 300,
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#F8F8F8",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "85%",
    height: "85%",
  },

  // Details
  details: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  category: {
    fontSize: 13,
    color: "#2E7D32",
    fontWeight: "600",
    marginBottom: 6,
  },

  name: {
    fontSize: 26,
    fontWeight: "700",
    color: "#222222",
  },

  unit: {
    fontSize: 14,
    color: "#777777",
    marginTop: 5,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },

  price: {
    fontSize: 24,
    fontWeight: "700",
    color: "#222222",
  },

  offer: {
    marginLeft: 12,
    backgroundColor: "#E8F5E9",
    color: "#2E7D32",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 6,
    fontSize: 12,
    fontWeight: "700",
  },

  // Description
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222222",
    marginTop: 25,
    marginBottom: 8,
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    color: "#666666",
  },

  // Stock
  stockContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  stockLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333333",
  },

  stock: {
    fontSize: 14,
    color: "#2E7D32",
    fontWeight: "600",
  },

  // Quantity
  quantitySection: {
    marginTop: 5,
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#E8F5E9",
    alignItems: "center",
    justifyContent: "center",
  },

  quantityButtonText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#2E7D32",
  },

  quantity: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 20,
    color: "#222222",
  },

  // Cart
  cartButton: {
    width: "100%",
    marginTop: 25,
    alignItems: "center",
  },

  // Not found
  notFound: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  notFoundText: {
    fontSize: 18,
    color: "#555555",
    marginBottom: 20,
  },
});
