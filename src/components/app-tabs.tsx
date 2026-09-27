import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function AppTabs() {
  return (
    <NativeTabs
      backgroundColor="#FFFFFF"
      indicatorColor="#E8F5E9"
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
      {/* HOME */}
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon md="home" />
      </NativeTabs.Trigger>

      {/* EXPLORE */}
      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Label>Categories</NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon md="explore" />
      </NativeTabs.Trigger>

      {/* CART */}
      <NativeTabs.Trigger name="cart">
        <NativeTabs.Trigger.Label>Cart</NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon md="shopping_cart" />
      </NativeTabs.Trigger>

      {/* PROFILE */}
      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon md="person" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
