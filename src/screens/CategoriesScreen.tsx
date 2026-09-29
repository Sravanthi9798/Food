import PageHeader from "@/components/PageHearder";
import { products } from "@/data/products";
import { router } from "expo-router";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Category = {
  id: string;
  name: string;
  productCategory: string;
  image: string;
};

const categories: Category[] = [
  {
    id: "fruits",
    name: "Fruits",
    productCategory: "Fruits",
    image:
      products.find((p) => p.category === "Fruits")?.image || "",
  },
  {
    id: "vegetables",
    name: "Vegetables",
    productCategory: "Vegetables",
    image:
      products.find((p) => p.category === "Vegetables")?.image || "",
  },
  {
    id: "dairy",
    name: "Dairy",
    productCategory: "Dairy",
    image:
      products.find((p) => p.category === "Dairy")?.image || "",
  },
  {
    id: "bakery",
    name: "Bakery",
    productCategory: "Bakery",
    image:
      products.find((p) => p.category === "Bakery")?.image || "",
  },
  {
    id: "meat",
    name: "Meat",
    productCategory: "Meat",
    image:
      products.find((p) => p.category === "Meat")?.image || "",
  },
  {
    id: "snacks",
    name: "Snacks",
    productCategory: "Snacks",
    image:
      products.find((p) => p.category === "Snacks")?.image || "",
  },
];

const sections = [
  {
    id: "grocery",
    title: "Grocery & Kitchen",
    categories: categories.slice(0, 6),
  },
];

export default function CategoriesScreen() {
  const openCategory = (category: Category) => {
    router.push({
      pathname: "/products",
      params: {
        category: category.productCategory,
      },
    });
  };

  return (
    <View style={styles.container}>

      {/* ================= HEADER ================= */}

      {/* <View style={styles.header}>
        <Text style={styles.headerTitle}>
          All Categories
        </Text>

        <View style={styles.headerActions}>
          <Pressable style={styles.headerButton}>
            <Text style={styles.heart}>♡</Text>
          </Pressable>

          <Pressable
            style={styles.headerButton}
            onPress={() => router.push("/products")}
          >
            <Text style={styles.searchIcon}>⌕</Text>
          </Pressable>
        </View>
      </View> */}
      <PageHeader title="All Categories"/>

      {/* ================= CATEGORY LIST ================= */}

      <FlatList
        data={sections}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        renderItem={({ item }) => (
          <View style={styles.section}>

            <Text style={styles.sectionTitle}>
              {item.title}
            </Text>

            <View style={styles.grid}>
              {item.categories.map((category) => (
                <Pressable
                  key={category.id}
                  style={styles.categoryCard}
                  onPress={() => openCategory(category)}
                >
                  <View style={styles.imageContainer}>
                    {category.image ? (
                      <Image
                        source={{ uri: category.image }}
                        style={styles.categoryImage}
                        resizeMode="contain"
                      />
                    ) : (
                      <Text style={styles.noImage}>
                        🛒
                      </Text>
                    )}
                  </View>

                  <Text
                    style={styles.categoryName}
                    numberOfLines={2}
                  >
                    {category.name}
                  </Text>
                </Pressable>
              ))}
            </View>

          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  /* ================= HEADER ================= */

  header: {
    height: 70,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",

    position: "relative",
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#222222",
  },

  headerActions: {
    position: "absolute",
    right: 18,

    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  headerButton: {
    width: 40,
    height: 40,

    alignItems: "center",
    justifyContent: "center",
  },

  heart: {
    fontSize: 36,
    color: "#222222",
    fontWeight: "300",
  },

  searchIcon: {
    fontSize: 34,
    color: "#222222",

    transform: [{ rotate: "-20deg" }],
  },

  /* ================= CONTENT ================= */

  content: {
    paddingHorizontal: 20,
    // paddingTop: 28,
    paddingBottom: 110,
  },

  section: {
    // marginBottom: 28,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#292D35",

    marginBottom: 16,
  },

  /* ================= GRID ================= */

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",

    justifyContent: "space-between",
  },

  categoryCard: {
    width: "23%",

    marginBottom: 22,

    alignItems: "center",
  },

  imageContainer: {
    width: "100%",
    aspectRatio: 1,

    backgroundColor: "#F7F7F7",

    borderRadius: 14,

    alignItems: "center",
    justifyContent: "center",

    overflow: "hidden",
  },

  categoryImage: {
    width: "90%",
    height: "90%",
  },

  noImage: {
    fontSize: 30,
  },

  categoryName: {
    marginTop: 8,

    fontSize: 13,
    lineHeight: 18,

    color: "#292D35",

    fontWeight: "600",

    textAlign: "center",
  },
});