import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => 
          pressed ? styles.buttonPressed : null}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
            <Text>{duration} Min</Text>
            <Text>{complexity.toUpperCase()}</Text>
            <Text>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8
  },
  buttonPressed: {
    opacity: 0.5,
  }
});
