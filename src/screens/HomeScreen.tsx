import Button from "@/components/Button";
import { router } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const API_URL = "http://10.203.54.11:5000/api/products";

type Product = {
  _id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  image: string;
  description: string;
  offer: string;
  stock: number;
};

export default function HomeScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  // ================= FETCH PRODUCTS =================

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.log("Home products error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ================= PRODUCT GROUPS =================

  const offerProducts = useMemo(() => {
    return products.filter((product) => product.offer);
  }, [products]);

  const bestSellers = useMemo(() => {
    return products.slice(0, 6);
  }, [products]);

  const todaysDeals = useMemo(() => {
    return products
      .filter((product) => product.offer)
      .slice(0, 5);
  }, [products]);

  // Temporary recently viewed
  const recentlyViewed = useMemo(() => {
    return products.slice(2, 7);
  }, [products]);

  // ================= SEARCH =================

  const searchResults = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    if (!query) {
      return [];
    }

    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
  }, [searchText, products]);

  // ================= OPEN PRODUCT =================

  const openProduct = (productId: string) => {
    router.push({
      pathname: "/product/[id]",
      params: {
        id: productId,
      },
    });
  };

  // ================= SEE ALL =================

  const openBestsellers = () => {
    router.push({
      pathname: "/products",
      params: {
        type: "bestsellers",
      },
    });
  };

  const openDeals = () => {
    router.push({
      pathname: "/products",
      params: {
        type: "deals",
      },
    });
  };

  const openAllProducts = () => {
    router.push("/products");
  };

  // ================= LOADING =================

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size="large"
          color="#2E7D32"
        />

        <Text style={styles.loadingText}>
          Loading products...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[2]}
      >
        {/* ================= HEADER ================= */}

        <View style={styles.header}>
          <Text style={styles.title}>
            FreshCart
          </Text>

          <Text style={styles.subtitle}>
            What do you want to buy today?
          </Text>
        </View>

        {/* ================= SPACE ================= */}

        <View style={styles.smallSpace} />

        {/* ================= SEARCH ================= */}

        <View style={styles.stickySearch}>
          <View style={styles.searchContainer}>
            <Text style={styles.searchIcon}>
              ⌕
            </Text>

            <TextInput
              placeholder='Search "chips"'
              placeholderTextColor="#777"
              style={styles.search}
              value={searchText}
              onChangeText={setSearchText}
            />

            {searchText.length > 0 && (
              <Pressable
                onPress={() => setSearchText("")}
              >
                <Text style={styles.clearSearch}>
                  ×
                </Text>
              </Pressable>
            )}
          </View>

          {/* ================= SEARCH RESULTS ================= */}

          {searchText.trim().length > 0 && (
            <View style={styles.searchResultsSection}>
              <View style={styles.searchResultHeader}>
                <Text style={styles.sectionTitle}>
                  Search Results
                </Text>

                <Text style={styles.resultCount}>
                  {searchResults.length} products
                </Text>
              </View>

              {searchResults.length === 0 ? (
                <View style={styles.noResults}>
                  <Text style={styles.noResultsText}>
                    No products found
                  </Text>
                </View>
              ) : (
                <FlatList
                  data={searchResults}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item._id}
                  contentContainerStyle={
                    styles.horizontalContent
                  }
                  renderItem={({ item: product }) => (
                    <Pressable
                      style={styles.bestsellerCard}
                      onPress={() =>
                        openProduct(product._id)
                      }
                    >
                      <Image
                        source={{
                          uri: product.image,
                        }}
                        style={styles.productImage}
                        resizeMode="cover"
                      />

                      <Text
                        style={styles.productName}
                        numberOfLines={2}
                      >
                        {product.name}
                      </Text>

                      <Text style={styles.unit}>
                        {product.unit}
                      </Text>

                      <View
                        style={styles.productBottom}
                      >
                        <Text style={styles.price}>
                          ₹{product.price}
                        </Text>

                        <Pressable
                          style={styles.addButton}
                          onPress={(event) => {
                            event.stopPropagation();
                          }}
                        >
                          <Text style={styles.addText}>
                            +
                          </Text>
                        </Pressable>
                      </View>
                    </Pressable>
                  )}
                />
              )}
            </View>
          )}
        </View>

        {/* ================= SPECIAL OFFERS ================= */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Special Offers
          </Text>

          <Pressable onPress={openAllProducts}>
            <Text style={styles.seeAll}>
              See all
            </Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={
            styles.horizontalContent
          }
        >
          {offerProducts
            .slice(0, 3)
            .map((product) => (
              <Pressable
                key={product._id}
                style={styles.offerCard}
                onPress={() =>
                  openProduct(product._id)
                }
              >
                <View
                  style={styles.offerTextContainer}
                >
                  <Text style={styles.offerBadge}>
                    {product.offer}
                  </Text>

                  <Text
                    style={styles.offerTitle}
                    numberOfLines={1}
                  >
                    {product.name}
                  </Text>

                  <Text
                    style={styles.offerDescription}
                  >
                    Fresh and quality products
                  </Text>

                  <Text style={styles.offerPrice}>
                    ₹{product.price}
                  </Text>

                  <Button
                    title="Shop Now"
                    onPress={openAllProducts}
                    style={styles.offerButton}
                  />
                </View>

                <Image
                  source={{
                    uri: product.image,
                  }}
                  style={styles.offerImage}
                  resizeMode="contain"
                />
              </Pressable>
            ))}
        </ScrollView>

        {/* ================= BESTSELLERS ================= */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Bestsellers
          </Text>

          <Pressable onPress={openBestsellers}>
            <Text style={styles.seeAll}>
              See all
            </Text>
          </Pressable>
        </View>

        <FlatList
          data={bestSellers}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          contentContainerStyle={
            styles.horizontalContent
          }
          renderItem={({ item: product }) => (
            <Pressable
              style={styles.bestsellerCard}
              onPress={() =>
                openProduct(product._id)
              }
            >
              <Image
                source={{
                  uri: product.image,
                }}
                style={styles.productImage}
                resizeMode="cover"
              />

              <Text
                style={styles.productName}
                numberOfLines={2}
              >
                {product.name}
              </Text>

              <Text style={styles.unit}>
                {product.unit}
              </Text>

              <View style={styles.productBottom}>
                <Text style={styles.price}>
                  ₹{product.price}
                </Text>

                <Pressable
                  style={styles.addButton}
                  onPress={(event) => {
                    event.stopPropagation();
                  }}
                >
                  <Text style={styles.addText}>
                    +
                  </Text>
                </Pressable>
              </View>
            </Pressable>
          )}
        />

        {/* ================= TODAY'S DEALS ================= */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Today's Deals 🔥
          </Text>

          <Pressable onPress={openDeals}>
            <Text style={styles.seeAll}>
              See all
            </Text>
          </Pressable>
        </View>

        <FlatList
          data={todaysDeals}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          contentContainerStyle={
            styles.horizontalContent
          }
          renderItem={({ item: product }) => (
            <Pressable
              style={styles.dealCard}
              onPress={() =>
                openProduct(product._id)
              }
            >
              <View
                style={styles.dealImageContainer}
              >
                <Text style={styles.dealBadge}>
                  {product.offer}
                </Text>

                <Image
                  source={{
                    uri: product.image,
                  }}
                  style={styles.dealImage}
                  resizeMode="contain"
                />
              </View>

              <Text
                style={styles.dealName}
                numberOfLines={1}
              >
                {product.name}
              </Text>

              <Text style={styles.unit}>
                {product.unit}
              </Text>

              <View style={styles.productBottom}>
                <Text style={styles.price}>
                  ₹{product.price}
                </Text>

                <Pressable
                  style={styles.addButton}
                  onPress={(event) => {
                    event.stopPropagation();
                  }}
                >
                  <Text style={styles.addText}>
                    +
                  </Text>
                </Pressable>
              </View>
            </Pressable>
          )}
        />

        {/* ================= RECENTLY VIEWED ================= */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Recently Viewed
          </Text>

          <Pressable>
            <Text style={styles.seeAll}>
              See all
            </Text>
          </Pressable>
        </View>

        <FlatList
          data={recentlyViewed}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          contentContainerStyle={[
            styles.horizontalContent,
            styles.recentBottom,
          ]}
          renderItem={({ item: product }) => (
            <Pressable
              style={styles.recentCard}
              onPress={() =>
                openProduct(product._id)
              }
            >
              <Image
                source={{
                  uri: product.image,
                }}
                style={styles.recentImage}
                resizeMode="cover"
              />

              <Text
                style={styles.recentName}
                numberOfLines={1}
              >
                {product.name}
              </Text>

              <Text style={styles.price}>
                ₹{product.price}
              </Text>
            </Pressable>
          )}
        />
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

  loadingContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  loadingText: {
    marginTop: 10,
    color: "#777777",
    fontSize: 14,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#369122",
  },

  subtitle: {
    color: "#777777",
    marginTop: 5,
    fontSize: 15,
  },

  smallSpace: {
    height: 15,
  },

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
    color: "#333333",
    marginRight: 10,
    transform: [{ rotate: "-20deg" }],
  },

  search: {
    flex: 1,
    fontSize: 16,
    color: "#222222",
    paddingVertical: 0,
  },

  clearSearch: {
    fontSize: 26,
    color: "#777777",
    paddingLeft: 10,
  },

  searchResultsSection: {
    marginTop: 10,
    marginBottom: 5,
  },

  searchResultHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  resultCount: {
    fontSize: 13,
    color: "#777777",
    fontWeight: "500",
  },

  noResults: {
    paddingVertical: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  noResultsText: {
    fontSize: 15,
    color: "#777777",
  },

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
    color: "#222222",
  },

  seeAll: {
    color: "#2E7D32",
    fontSize: 14,
    fontWeight: "600",
  },

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
    color: "#555555",
    marginTop: 4,
  },

  offerPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222222",
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

  bestsellerCard: {
    width: 145,
    backgroundColor: "#F8F8F8",
    borderRadius: 14,
    padding: 10,
    marginRight: 12,
  },

  productImage: {
    width: "100%",
    height: 110,
    borderRadius: 10,
  },

  productName: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 8,
    color: "#222222",
  },

  unit: {
    fontSize: 10,
    color: "#777777",
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
    color: "#222222",
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
    color: "#222222",
  },

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
    color: "#222222",
    marginTop: 7,
    marginBottom: 3,
  },

  recentBottom: {
    paddingBottom: 30,
  },
});