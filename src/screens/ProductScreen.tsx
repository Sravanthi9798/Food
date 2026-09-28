import { useMemo, useState } from "react";
import {
    FlatList,
    Image,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

import PageHeader from "@/components/PageHearder";
import { products } from "@/data/products";
import { router } from "expo-router";

const categories = [
  "Fruits",
  "Vegetables",
  "Dairy",
  "Bakery",
  "Meat",
  "Snacks",
];

export default function ProductsScreen() {
  const [searchText, setSearchText] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category],
    );
  };

  // Search + category filter
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.category.toLowerCase().includes(searchText.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      return matchesSearch && matchesCategory;
    });
  }, [searchText, selectedCategories]);

  return (
    <View style={styles.container}>
      {/* Page Header */}
      <PageHeader
        title="All Products"
        onFilterPress={() => setFilterVisible(true)}
        filterCount={selectedCategories.length}
      />

      {/* Product List */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.name}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productList}
        columnWrapperStyle={styles.row}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <Text style={styles.sectionTitle}>Bestsellers</Text>

            <Text style={styles.resultText}>
              {filteredProducts.length} products
            </Text>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No products found</Text>
            <Text style={styles.emptyText}>
              Try searching for another product
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <Pressable
            style={styles.product}
            onPress={() =>
              router.push({
                pathname: "/product/[id]",
                params: {
                  id: String(item.id),
                },
              })
            }
          >
            {/* Product Image */}
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item.image }}
                style={styles.productImage}
                resizeMode="cover"
              />

              {/* Heart */}
              <Pressable style={styles.heartButton}>
                <Text style={styles.heart}>♡</Text>
              </Pressable>
            </View>

            {/* Quantity + Add */}
            <View style={styles.quantityRow}>
              <Text style={styles.unit}>{item.unit}</Text>

              <Pressable style={styles.addButton}>
                <Text style={styles.addText}>ADD</Text>
              </Pressable>
            </View>

            {/* Price */}
            <View style={styles.priceRow}>
              <Text style={styles.price}>₹{item.price}</Text>

              {/* Example old price */}
              <Text style={styles.oldPrice}>₹{item.price + 5}</Text>
            </View>

            {/* Product name */}
            <Text style={styles.productName} numberOfLines={2}>
              {item.name}
            </Text>

            {/* Delivery */}
            <Text style={styles.delivery}>◷ 10 mins</Text>
          </Pressable>
        )}
      />

      {/* Filter Modal */}
      <Modal
        visible={filterVisible}
        transparent
        animationType="slide"
        statusBarTranslucent
        navigationBarTranslucent
        onRequestClose={() => setFilterVisible(false)}
      >
        <View style={styles.modalContainer}>
          {/* Dark Overlay */}
          <Pressable
            style={styles.overlay}
            onPress={() => setFilterVisible(false)}
          />

          {/* Bottom Sheet */}
          <View style={styles.bottomSheet}>
            <View style={styles.sheetHandle} />

            <View style={styles.sheetHeader}>
              <Text style={styles.sheetTitle}>Filter by Category</Text>

              <Pressable onPress={() => setFilterVisible(false)}>
                <Text style={styles.closeText}>✕</Text>
              </Pressable>
            </View>

            {categories.map((category) => {
              const selected = selectedCategories.includes(category);

              return (
                <Pressable
                  key={category}
                  style={styles.categoryRow}
                  onPress={() => toggleCategory(category)}
                >
                  <View
                    style={[
                      styles.checkbox,
                      selected && styles.checkboxSelected,
                    ]}
                  >
                    {selected && <Text style={styles.checkmark}>✓</Text>}
                  </View>

                  <Text style={styles.categoryText}>{category}</Text>
                </Pressable>
              );
            })}

            <View style={styles.sheetButtons}>
              <Pressable
                style={styles.clearButton}
                onPress={() => setSelectedCategories([])}
              >
                <Text style={styles.clearText}>Clear</Text>
              </Pressable>

              <Pressable
                style={styles.applyButton}
                onPress={() => setFilterVisible(false)}
              >
                <Text style={styles.applyText}>Apply Filter</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  /* ================= SEARCH ================= */

  searchContainer: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
    zIndex: 10,
  },

  searchBox: {
    height: 52,
    borderWidth: 1,
    borderColor: "#D5D5D5",
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    backgroundColor: "#FFFFFF",
  },

  searchIcon: {
    fontSize: 32,
    color: "#222",
    marginRight: 8,
    transform: [{ rotate: "-20deg" }],
  },

  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 15,
    color: "#222",
  },

  divider: {
    width: 1,
    height: 30,
    backgroundColor: "#DDDDDD",
    marginHorizontal: 10,
  },

  micIcon: {
    fontSize: 19,
  },

  /* ================= FILTER ================= */

  filterButton: {
    height: 45,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#D5D5D5",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  filterIcon: {
    fontSize: 18,
    color: "#2E7D32",
    marginRight: 8,
  },

  filterText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
  },

  filterCount: {
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#2E7D32",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },

  filterCountText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },

  /* ================= LIST ================= */

  productList: {
    paddingHorizontal: 15,
    paddingBottom: 30,
  },

  listHeader: {
    paddingTop: 10,
    paddingBottom: 12,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
  },

  resultText: {
    fontSize: 13,
    color: "#777",
    marginTop: 3,
  },

  row: {
    justifyContent: "space-between",
  },

  /* ================= PRODUCT ================= */

  product: {
    width: "31.5%",
    marginBottom: 22,
  },

  imageContainer: {
    width: "100%",
    height: 115,
    backgroundColor: "#F7F7F7",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },

  productImage: {
    width: "100%",
    height: "100%",
  },

  heartButton: {
    position: "absolute",
    top: 5,
    right: 5,
    width: 27,
    height: 27,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  heart: {
    fontSize: 20,
    color: "#777",
  },

  quantityRow: {
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  unit: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
  },

  addButton: {
    width: 50,
    height: 34,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#2E7D32",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  addText: {
    color: "#2E7D32",
    fontSize: 13,
    fontWeight: "700",
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },

  oldPrice: {
    fontSize: 11,
    color: "#888",
    textDecorationLine: "line-through",
    marginLeft: 5,
  },

  productName: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "500",
    color: "#333",
    marginTop: 4,
  },

  delivery: {
    fontSize: 11,
    color: "#777",
    marginTop: 5,
  },

  /* ================= EMPTY ================= */

  emptyContainer: {
    alignItems: "center",
    paddingTop: 80,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  emptyText: {
    marginTop: 8,
    color: "#777",
  },

  /* ================= MODAL ================= */

  modalContainer: {
    flex: 1,
  },

  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  bottomSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
  },

  sheetHandle: {
    width: 45,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#CCCCCC",
    alignSelf: "center",
    marginBottom: 20,
  },

  sheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  sheetTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  closeText: {
    fontSize: 20,
    color: "#777",
  },

  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1.5,
    borderColor: "#AAAAAA",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  checkboxSelected: {
    backgroundColor: "#2E7D32",
    borderColor: "#2E7D32",
  },

  checkmark: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  categoryText: {
    fontSize: 16,
    color: "#333",
  },

  sheetButtons: {
    flexDirection: "row",
    gap: 12,
    marginTop: 20,
  },

  clearButton: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: "#2E7D32",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  clearText: {
    color: "#2E7D32",
    fontSize: 15,
    fontWeight: "600",
  },

  applyButton: {
    flex: 1,
    height: 48,
    backgroundColor: "#2E7D32",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  applyText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
});
