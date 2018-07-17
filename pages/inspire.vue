<template>
  <div>
      <div v-for="(fav, index) in favorites" :key="index">
        <h2>{{ fav.name }}</h2>
        <img :src="fav.image" alt="favorites" />
        <button>Remove</button>
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
    favorites() {
      return this.$store.state.favorites;
    }
  },
  async mounted() {
    await this.$store.dispatch("getFavorites");
  }
};
</script>