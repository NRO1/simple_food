import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data.js";
import MealDetails from "../components/MealDetails.js";
import List from "../components/List";
import IconButton from "../components/IconButton.js";

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerPress() {
    console.log('pressed')
  }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton onPress={headerPress} color="white" icon="star" />
            }
        })
    },[navigation, headerPress])

  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View>
          <MealDetails
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            textStyle={styles.detailText}
          />
        </View>
        <View style={styles.outerListContainer}>
          <View style={styles.listConatiner}>
            <Text style={styles.subTitle}>Ingredients</Text>
            <List data={selectedMeal.ingredients} />
            <Text style={styles.subTitle}>Steps</Text>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    margin: 6,
    textAlign: "center",
  },
  listConatiner: {
    width: "80%",
  },
  outerListContainer: {
    alignItems: "center",
  },
});
