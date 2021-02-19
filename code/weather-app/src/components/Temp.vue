<template>
  <div class="backgroundClass">
    <h1>{{ city }}</h1>
    <h1>{{ temperature }} C</h1>
    <h3>{{ temp_min }} C</h3>
    <h3>{{ temp_max }} C</h3>
    <h4>{{ feels_like }} C</h4>
    <h4>{{ description }}</h4>
    <img :src="iconUrl" alt="" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    city: (state) => state.location.city,
    temperature: (state) => state.weather.temperature,
    temp_max: (state) => state.weather.temp_max,
    temp_min: (state) => state.weather.temp_min,
    feels_like: (state) => state.weather.feels_like,
    description: (state) => state.weather.description,
    iconUrl: (state) => state.weather.iconUrl,
  }),
  async mounted() {
    await this.$store.dispatch("location/getLocations");
    await this.$store.dispatch(
      "weather/getCurrentWeather",
      this.$store.state.location.city
    );
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
  },
};
</script>