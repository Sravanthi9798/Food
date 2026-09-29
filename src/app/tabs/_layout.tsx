import { Tabs, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

function CustomTabBar({ state, descriptors, navigation }: any) {
  const tabRoutes = state.routes.filter((route: any) =>
    ["home", "categories", "orderAgain", "profile"].includes(route.name)
  );

  return (
    <View style={styles.container}>

      {/* ================= FLOATING CART ================= */}
      <Pressable
        style={styles.cartButton}
        onPress={() => router.push("/tabs/cart")}
      >
        {/* Cart product images */}
        <View style={styles.cartImages}>

          <View style={[styles.cartImageWrapper, styles.imageOne]}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
              }}
              style={styles.cartImage}
            />
          </View>

          <View style={[styles.cartImageWrapper, styles.imageTwo]}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
              }}
              style={styles.cartImage}
            />
          </View>

          <View style={[styles.cartImageWrapper, styles.imageThree]}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1587049352846-4a222e784d38",
              }}
              style={styles.cartImage}
            />
          </View>

        </View>

        {/* Cart text */}
        <View style={styles.cartTextContainer}>
          <Text style={styles.cartTitle}>
            View cart
          </Text>

          <Text style={styles.cartItems}>
            3 items
          </Text>
        </View>

        {/* Arrow */}
        <Ionicons
          name="chevron-forward"
          size={24}
          color="#FFFFFF"
        />
      </Pressable>


      {/* ================= BOTTOM TABS ================= */}
      <View style={styles.tabBar}>

        {tabRoutes.map((route: any) => {
          const { options } = descriptors[route.key];

          const isFocused =
            state.routes[state.index]?.name === route.name;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          let iconName: keyof typeof Ionicons.glyphMap =
            "ellipse-outline";

          switch (route.name) {
            case "home":
              iconName = "home-outline";
              break;

            case "categories":
              iconName = "grid-outline";
              break;

            case "orderAgain":
              iconName = "repeat-outline";
              break;

            case "profile":
              iconName = "person-outline";
              break;
          }

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              style={styles.tab}
            >
              <Ionicons
                name={iconName}
                size={25}
                color={
                  isFocused
                    ? "#2E7D32"
                    : "#777777"
                }
              />

              <Text
                style={[
                  styles.label,
                  isFocused && styles.activeLabel,
                ]}
              >
                {options.title}
              </Text>
            </Pressable>
          );
        })}

      </View>
    </View>
  );
}


export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => (
        <CustomTabBar {...props} />
      )}
      screenOptions={{
        headerShown: false,
      }}
    >

      {/* HOME */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
        }}
      />

      {/* CATEGORIES */}
      <Tabs.Screen
        name="categories"
        options={{
          title: "Categories",
        }}
      />

      {/* ORDER AGAIN */}
      <Tabs.Screen
        name="orderAgain"
        options={{
          title: "Order Again",
        }}
      />

      {/* PROFILE */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />

      {/* CART IS NOT A TAB */}
      <Tabs.Screen
        name="cart"
        options={{
          href: null,
        }}
      />

    </Tabs>
  );
}


const styles = StyleSheet.create({

  container: {
    backgroundColor: "#FFFFFF",
  },


  /* ================= CART ================= */

  cartButton: {
    position: "absolute",

    bottom: 85,

    left: 25,
    right: 25,

    height: 50,

    backgroundColor: "#2E8B20",

    borderRadius: 36,

    flexDirection: "row",

    alignItems: "center",

    paddingLeft: 8,
    paddingRight: 14,

    elevation: 10,

    shadowColor: "#000",
    shadowOpacity: 0.22,
    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    zIndex: 100,
  },


  /* ================= CART IMAGES ================= */

  cartImages: {
    width: 82,
    height: 46,

    position: "relative",

    flexDirection: "row",

    alignItems: "center",
  },

  cartImageWrapper: {
    position: "absolute",

    width: 38,
    height: 38,

    borderRadius: 26,

    backgroundColor: "#FFFFFF",

    borderWidth: 2,
    borderColor: "#FFFFFF",

    overflow: "hidden",
  },

  imageOne: {
    left: 0,
    zIndex: 3,
  },

  imageTwo: {
    left: 28,
    zIndex: 2,
  },

  imageThree: {
    left: 56,
    zIndex: 1,
  },

  cartImage: {
    width: "100%",
    height: "100%",
  },


  /* ================= CART TEXT ================= */

  cartTextContainer: {
    flex: 1,

    marginLeft: 38,
  },

  cartTitle: {
    color: "#FFFFFF",

    fontSize: 14,

    fontWeight: "500",
  },

  cartItems: {
    color: "#FFFFFF",

    fontSize: 12,

    marginTop: 2,
  },


  /* ================= BOTTOM TABS ================= */

  tabBar: {
    height: 76,

    backgroundColor: "#FFFFFF",

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-around",

    borderTopWidth: 1,

    borderTopColor: "#EEEEEE",
  },

  tab: {
    flex: 1,

    alignItems: "center",

    justifyContent: "center",
  },

  label: {
    marginTop: 5,

    fontSize: 12,

    color: "#777777",
  },

  activeLabel: {
    color: "#2E7D32",

    fontWeight: "700",
  },

});