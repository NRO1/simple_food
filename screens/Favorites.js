import MealList from "../components/MealsList/MealList";
import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import { View, Text, StyleSheet } from "react-native";

function Favorites() {
  const favMealCtx = useContext(FavoritesContext);

  const favMeals = MEALS.filter((meal) => favMealCtx.ids.includes(meal.id));

  if (favMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No favorites yet</Text>
      </View>
    );
  }

  return <MealList items={favMeals} />;
}

export default Favorites;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
