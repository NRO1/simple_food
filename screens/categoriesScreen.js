import { StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CatGrid from "../components/CatGrid";

function renderCatItem(itemData) {
  return <CatGrid title={itemData.item.title} color={itemData.item.color} />;
}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCatItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({});
