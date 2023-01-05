import MealList from "../components/MealsList/MealList.js";
import { MEALS, CATEGORIES } from "../data/dummy-data.js";
import { useLayoutEffect } from "react";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const dispMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  //setting options inside a screen is allowed only with useEffect or useLayoutEffect as shown here
  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((category) => category.id === catId).title;
    navigation.setOptions({
      title: catTitle,
    }),
      [catId, navigation];
  });

  return <MealList items={dispMeals} />
}

export default MealsOverviewScreen;
