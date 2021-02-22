<template>
  <div class="backgroundClass" :style="{backgroundImage:`url(${backgroundPath})`}">
  <animation :weather="weatherDesc" />
  <Content />
  </div>
</template>

<script>
import landscapeImages from "../data/landscape.json"
import portraitImages from "../data/portrait.json"
import Animation from '../components/Animation.vue'
import Content from '../components/Content.vue'

export default {
  data() {
    return {
      images: this.isPortrait(window.innerHeight, window.innerWidth) ?  portraitImages : landscapeImages,
      weatherDesc: ''
    };
  },
  components:{
    Animation,
    Content
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
    console.log(this.weatherDesc)
    
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
      let time = new Date().getHours()
      console.log(time)
      return (this.isNightTime(time) ? this.images.night[season][
        Math.floor(Math.random() * this.images.night[season].length)
      ] : this.images.day[season][
        Math.floor(Math.random() * this.images.day[season].length)
      ])
    },
    isPortrait(height, width){
        return height > width;
    },
    isNightTime(hour){
      return (hour >= 18 && hour <= 24) || (hour >= 1 && hour <= 5);
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