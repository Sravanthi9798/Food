import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <Text style={styles.title}>👤 Profile</Text>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>S</Text>
        </View>

        <View>
          <Text style={styles.name}>Sravanthi</Text>

          <Text style={styles.email}>sravanthi@example.com</Text>
        </View>
      </View>

      {/* Account */}
      <Text style={styles.sectionTitle}>Account</Text>

      <ProfileItem
        emoji="👤"
        title="Personal Information"
        subtitle="Manage your personal details"
      />

      <ProfileItem
        emoji="📍"
        title="My Addresses"
        subtitle="Manage delivery addresses"
      />

      <ProfileItem
        emoji="📦"
        title="My Orders"
        subtitle="View your previous orders"
      />

      {/* Settings */}
      <Text style={styles.sectionTitle}>Settings</Text>

      <ProfileItem
        emoji="🔔"
        title="Notifications"
        subtitle="Manage notifications"
      />

      <ProfileItem emoji="⚙️" title="Settings" subtitle="App preferences" />

      <ProfileItem
        emoji="❓"
        title="Help & Support"
        subtitle="Get help with your orders"
      />

      {/* Logout */}
      <Pressable style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </ScrollView>
  );
}

/* Profile Item */

function ProfileItem({
  emoji,
  title,
  subtitle,
}: {
  emoji: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Pressable style={styles.item}>
      <Text style={styles.itemEmoji}>{emoji}</Text>

      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{title}</Text>

        <Text style={styles.itemSubtitle}>{subtitle}</Text>
      </View>

      <Text style={styles.arrow}>›</Text>
    </Pressable>
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

  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F5E9",
    borderRadius: 18,
    padding: 20,
    marginTop: 25,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2E7D32",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "700",
  },

  name: {
    fontSize: 19,
    fontWeight: "700",
  },

  email: {
    color: "#777777",
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 30,
    marginBottom: 12,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 14,
    padding: 15,
    marginBottom: 10,
  },

  itemEmoji: {
    fontSize: 25,
    width: 40,
  },

  itemContent: {
    flex: 1,
  },

  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  itemSubtitle: {
    color: "#777777",
    fontSize: 13,
    marginTop: 4,
  },

  arrow: {
    fontSize: 28,
    color: "#999999",
  },

  logoutButton: {
    backgroundColor: "#2E7D32",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    marginTop: 25,
    marginBottom: 30,
  },

  logoutText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
