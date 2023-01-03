import { View, Text, StyleSheet, style } from 'react-native';

function MealDetails({ duration, complexity, affordability, style, textStyle}) {
    return (
        <View style={[styles.details, style]}>
            <Text style={textStyle} >{duration} Min</Text>
            <Text style={textStyle}>{complexity.toUpperCase()}</Text>
            <Text style={textStyle}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8
      }
})