import Button from "@/components/Button";
import { products } from "@/data/products";
import { router } from "expo-router";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function HomeScreen() {
  // Products with offers
  const offerProducts = products.filter((product) => product.offer);

  // First 6 products for bestsellers
  const bestSellers = products.slice(0, 6);

  // First 5 products for today's deals
  const todaysDeals = products.filter((product) => product.offer).slice(0, 5);

  // Temporary recently viewed products
  // Later we can make this dynamic using AsyncStorage/context.
  const recentlyViewed = products.slice(2, 7);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[2]}
      >
        {/* ================= HEADER ================= */}

        <View style={styles.header}>
          <Text style={styles.title}>Hello</Text>

          <Text style={styles.subtitle}>What do you want to buy today?</Text>
        </View>

        {/* Space before sticky search */}

        <View style={styles.smallSpace} />

        {/* ================= STICKY SEARCH ================= */}

        <View style={styles.stickySearch}>
          <View style={styles.searchContainer}>
            <Text style={styles.searchIcon}>⌕</Text>

            <TextInput
              placeholder='Search "chips"'
              placeholderTextColor="#777"
              style={styles.search}
            />
          </View>
        </View>

        {/* ================= SPECIAL OFFERS ================= */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Special Offers</Text>

          <Pressable onPress={() => router.push("/products")}>
            <Text style={styles.seeAll}>See all</Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalContent}
        >
          {offerProducts.slice(0, 3).map((product) => (
            <Pressable
              key={product.name}
              style={styles.offerCard}
              onPress={() =>
                router.push({
                  pathname: "/product/[id]",
                  params: {
                    id: String(product.id),
                  },
                })
              }
            >
              <View style={styles.offerTextContainer}>
                <Text style={styles.offerBadge}>{product.offer}</Text>

                <Text style={styles.offerTitle}>{product.name}</Text>

                <Text style={styles.offerDescription}>
                  Fresh and quality products
                </Text>

                <Text style={styles.offerPrice}>₹{product.price}</Text>

                <Button
                  title="Shop Now"
                  onPress={() => router.push("/products")}
                  style={styles.offerButton}
                />
              </View>

              <Image
                source={{ uri: product.image }}
                style={styles.offerImage}
                resizeMode="contain"
              />
            </Pressable>
          ))}
        </ScrollView>

        {/* ================= BESTSELLERS ================= */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Bestsellers</Text>

          <Pressable onPress={() => router.push("/products")}>
            <Text style={styles.seeAll}>See all</Text>
          </Pressable>
        </View>

        <View style={styles.products}>
          {bestSellers.map((product) => (
            <Pressable
              key={product.name}
              style={styles.dealCard}
              onPress={() =>
                router.push({
                  pathname: "/product/[id]",
                  params: {
                    id: String(product.id),
                  },
                })
              }
            >
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
                resizeMode="cover"
              />

              <Text style={styles.productName} numberOfLines={2}>
                {product.name}
              </Text>

              <Text style={styles.unit}>{product.unit}</Text>

              <View style={styles.productBottom}>
                <Text style={styles.price}>₹{product.price}</Text>

                <Pressable
                  style={styles.addButton}
                  onPress={(event) => {
                    event.stopPropagation();
                  }}
                >
                  <Text style={styles.addText}>+</Text>
                </Pressable>
              </View>
            </Pressable>
          ))}
        </View>

        {/* ================= TODAY'S DEALS ================= */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Today's Deals 🔥</Text>

          <Pressable onPress={() => router.push("/products")}>
            <Text style={styles.seeAll}>See all</Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalContent}
        >
          {todaysDeals.map((product) => (
            <Pressable
              key={product.name}
              style={styles.dealCard}
              onPress={() =>
                router.push({
                  pathname: "/product/[id]",
                  params: {
                    id: String(product.id),
                  },
                })
              }
            >
              <View style={styles.dealImageContainer}>
                <Text style={styles.dealBadge}>{product.offer}</Text>

                <Image
                  source={{ uri: product.image }}
                  style={styles.dealImage}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.dealName} numberOfLines={1}>
                {product.name}
              </Text>

              <Text style={styles.unit}>{product.unit}</Text>

              <View style={styles.productBottom}>
                <Text style={styles.price}>₹{product.price}</Text>

                <Pressable
                  style={styles.addButton}
                  onPress={(event) => {
                    event.stopPropagation();
                  }}
                >
                  <Text style={styles.addText}>+</Text>
                </Pressable>
              </View>
            </Pressable>
          ))}
        </ScrollView>

        {/* ================= RECENTLY VIEWED ================= */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recently Viewed</Text>

          <Pressable>
            <Text style={styles.seeAll}>See all</Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            styles.horizontalContent,
            styles.recentBottom,
          ]}
        >
          {recentlyViewed.map((product) => (
            <Pressable
              key={product.name}
              style={styles.recentCard}
              onPress={() =>
                router.push({
                  pathname: "/product/[id]",
                  params: {
                    id: String(product.id),
                  },
                })
              }
            >
              <Image
                source={{ uri: product.image }}
                style={styles.recentImage}
                resizeMode="cover"
              />

              <Text style={styles.recentName} numberOfLines={1}>
                {product.name}
              </Text>

              <Text style={styles.price}>₹{product.price}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 30,
  },

  /* ================= HEADER ================= */

  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#222",
  },

  subtitle: {
    color: "#777",
    marginTop: 5,
    fontSize: 15,
  },

  smallSpace: {
    height: 15,
  },

  /* ================= SEARCH ================= */

  stickySearch: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  searchContainer: {
    height: 52,
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },

  searchIcon: {
    fontSize: 30,
    color: "#333",
    marginRight: 10,
    transform: [{ rotate: "-20deg" }],
  },

  search: {
    flex: 1,
    fontSize: 16,
    color: "#222",
    paddingVertical: 0,
  },

  /* ================= SECTION ================= */

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 15,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  seeAll: {
    color: "#2E7D32",
    fontSize: 14,
    fontWeight: "600",
  },

  /* ================= SPECIAL OFFERS ================= */

  horizontalContent: {
    paddingHorizontal: 20,
  },

  offerCard: {
    width: 310,
    minHeight: 180,
    backgroundColor: "#E8F5E9",
    borderRadius: 18,
    marginRight: 15,
    padding: 18,
    flexDirection: "row",
    overflow: "hidden",
  },

  offerTextContainer: {
    flex: 1,
  },

  offerBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#2E7D32",
    color: "#FFFFFF",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    fontSize: 11,
    fontWeight: "700",
  },

  offerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2E7D32",
    marginTop: 8,
  },

  offerDescription: {
    fontSize: 11,
    color: "#555",
    marginTop: 4,
  },

  offerPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
    marginTop: 6,
  },

  offerButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 8,
    alignSelf: "flex-start",
  },

  offerImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },

  /* ================= PRODUCTS ================= */

  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  product: {
    width: "31.5%",
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    padding: 8,
    marginBottom: 12,
  },

  productImage: {
    width: "100%",
    height: 85,
    borderRadius: 10,
  },

  productName: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 8,
    color: "#222",
  },

  unit: {
    fontSize: 10,
    color: "#777",
    marginTop: 2,
  },

  productBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 7,
  },

  price: {
    fontSize: 13,
    fontWeight: "700",
    color: "#222",
  },

  addButton: {
    width: 27,
    height: 27,
    borderRadius: 7,
    backgroundColor: "#2E7D32",
    alignItems: "center",
    justifyContent: "center",
  },

  addText: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 22,
  },

  /* ================= TODAY'S DEALS ================= */

  dealCard: {
    width: 145,
    backgroundColor: "#F8F8F8",
    borderRadius: 14,
    padding: 10,
    marginRight: 12,
  },

  dealImageContainer: {
    height: 110,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },

  dealImage: {
    width: 95,
    height: 95,
  },

  dealBadge: {
    position: "absolute",
    top: 5,
    left: 5,
    zIndex: 1,
    backgroundColor: "#E53935",
    color: "#FFFFFF",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 5,
    fontSize: 9,
    fontWeight: "700",
  },

  dealName: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 8,
    color: "#222",
  },

  /* ================= RECENTLY VIEWED ================= */

  recentCard: {
    width: 120,
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    padding: 8,
    marginRight: 12,
  },

  recentImage: {
    width: "100%",
    height: 85,
    borderRadius: 10,
  },

  recentName: {
    fontSize: 11,
    fontWeight: "600",
    color: "#222",
    marginTop: 7,
    marginBottom: 3,
  },

  recentBottom: {
    paddingBottom: 30,
  },
});
