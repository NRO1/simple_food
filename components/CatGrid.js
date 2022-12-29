import { View, Text, Pressable, StyleSheet, Platform } from "react-native";

function CatGrid({ title, color, onPress }) {

  return (
    <View style={styles.grid}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color}]} >
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CatGrid;

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 4,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
