<template>
  <div class="backgroundClass" :style="{backgroundImage:`url(${backgroundPath})`}">
  <animation :weather="weatherDesc" />
  </div>
</template>

<script>
import landscapeImages from "../data/landscape.json"
import portraitImages from "../data/portrait.json"
import Animation from '../components/Animation.vue'

export default {
  data() {
    return {
      images: this.isPortrait(window.innerHeight, window.innerWidth) ?  portraitImages : landscapeImages,
      weatherDesc: ''
    };
  },
  components:{
    Animation
  },
  computed: {
    backgroundPath() {
      let today = new Date();
      let season = this.whatSeason(today.getMonth() + 1);
      return require(`../assets/${this.randomBackground(season)}`);
    }
  },
  async mounted() {
    await this.$store.dispatch("location/getLocations");
    await this.$store.dispatch("weather/getCurrentWeather",this.$store.state.location.city);
    this.weatherDesc = this.$store.state.weather.description
  },
  methods: {
    whatSeason(curMonth) {
      if (typeof curMonth !== "number") return "curMonth should be a number";
      return curMonth >= 3 && curMonth <= 5
        ? "spring"
        : curMonth >= 6 && curMonth <= 8
        ? "summer"
        : curMonth >= 9 && curMonth <= 11
        ? "fall"
        : "winter";
    },
    randomBackground(season) {
      return this.images[season][
        Math.floor(Math.random() * this.images[season].length)
      ];
    },
    isPortrait(height, width){
        return height > width;
    }
  },
};
</script>

<style scoped>
.backgroundClass{
    position: relative;
    height: 100vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
}
</style>