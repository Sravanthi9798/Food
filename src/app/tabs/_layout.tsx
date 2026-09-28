import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabsLayout() {
  return (
    <NativeTabs
      backgroundColor="#DEF6DF"
      indicatorColor="#FCFFFD"
      iconColor={{
        default: "#777777",
        selected: "#2E7D32",
      }}
      labelStyle={{
        default: {
          color: "#777777",
          fontSize: 12,
        },
        selected: {
          color: "#2E7D32",
          fontSize: 12,
          fontWeight: "700",
        },
      }}
    >
      <NativeTabs.Trigger name="home" labelVisibilityMode="labeled">
        <NativeTabs.Trigger.Icon md="home" />
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="categories" labelVisibilityMode="labeled">
        <NativeTabs.Trigger.Icon md="explore" />
        <NativeTabs.Trigger.Label>Categories</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="cart" labelVisibilityMode="labeled">
        <NativeTabs.Trigger.Icon md="shopping_cart" />
        <NativeTabs.Trigger.Label>Cart</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile" labelVisibilityMode="labeled">
        <NativeTabs.Trigger.Icon md="person" />
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
