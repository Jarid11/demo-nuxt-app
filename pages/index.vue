<template>
  <div>
      <div v-for="(char, index) in characters" :key="index">
        <h2>{{ char.name }}</h2>
        <img :src="char.image" alt="characters" />
        <button @click="addChar(char)">Fav</button>
      </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import axios from "axios";

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  computed: {
    characters() {
      return this.$store.state.characters;
    }
  },
  methods: {
    addChar(char) {
      this.$store.commit("addFav", char);
    }
  },
  async mounted() {
    await this.$store.dispatch("getCharacters");
  }
};
</script>
