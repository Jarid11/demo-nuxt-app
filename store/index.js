import Vuex from "vuex";
import axios from "axios";

export default () => {
  return new Vuex.Store({
    state: {
      characters: [],
      favorites: []
    },
    mutations: {
      setCharacters(state, characters) {
        Object.assign(state, { characters });
      },
      getFavorites(state, favorites) {
        state.favorites;
      },
      addFav(state, char) {
        state.favorites.push(char);
      }
    },
    actions: {
      async getCharacters({ commit }) {
        let { data } = await axios.get(
          "https://rickandmortyapi.com/api/character/?page=1"
        );
        commit("setCharacters", data.results);
      },
      async getFavorites({ commit }) {
        commit("getFavorites", this.state.favorites);
      },
      nuxtServerInit({ dispatch }) {
        dispatch("getCharacters");
        dispatch("getFavorites");
      }
    }
  });
};
