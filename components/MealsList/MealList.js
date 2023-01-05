import  { StyleSheet, View, FlatList } from 'react-native';
import MealItem from './MealItem';

function MealList({items}) {
    function renderMeal(itemData) {
        return (
          <MealItem
          id= {itemData.item.id}
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
          />
        );
      }
    
      return (
        <View style={styles.container}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMeal}
          />
        </View>
      );
}

export default MealList;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });