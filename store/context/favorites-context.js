import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFav: (id) => {},
  removeFav: (id) => {},
});

function FavCtxProvider({ children }) {
  const [favMealId, setFavMealID] = useState([]);

  function addFav(id) {
    setFavMealID((curFavId) => [...curFavId, id]);
  }

  function removeFav(id) {
    setFavMealID((curFavID) => curFavID.filter((mealId) => mealId !== id));
  }

  const value = {
    ids: favMealId,
    addFav: addFav,
    removeFav: removeFav,
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export default FavCtxProvider;
