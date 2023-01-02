import { StyleSheet, View, Text } from "react-native";

function MealDetailsScreen({ route }) {
    const mealId = route.params.mealId;

    return (
        <View>
            <Text>({mealId})</Text>
        </View>
    )

}

export default MealDetailsScreen;