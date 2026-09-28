import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

type PageHeaderProps = {
  title: string;
  onFilterPress?: () => void;
  filterCount?: number;
};

export default function PageHeader({
  title,
  onFilterPress,
  filterCount = 0,
}: PageHeaderProps) {
  return (
    <View style={styles.header}>
      {/* Back Button */}
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>‹</Text>
      </Pressable>

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Right Side */}
      {onFilterPress ? (
        <Pressable style={styles.filterButton} onPress={onFilterPress}>
          <Text style={styles.filterIcon}>☰</Text>

          {filterCount > 0 && (
            <View style={styles.filterCount}>
              <Text style={styles.filterCountText}>{filterCount}</Text>
            </View>
          )}
        </Pressable>
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    backgroundColor: "#9fcba3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 30,
    marginBottom: 15,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  backText: {
    fontSize: 32,
    color: "#2E7D32",
    lineHeight: 35,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
  },

  placeholder: {
    width: 40,
  },

  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  filterIcon: {
    fontSize: 18,
    color: "#2E7D32",
  },

  filterCount: {
    position: "absolute",
    top: -2,
    right: -2,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#2E7D32",
    alignItems: "center",
    justifyContent: "center",
  },

  filterCountText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
  },
});
