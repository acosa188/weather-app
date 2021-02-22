<template>
  <div class="animationClass">
    <div id="sunny_animation">
      <div class="theSun">
        <div class="ray_box">
          <div class="ray ray1"></div>
          <div class="ray ray2"></div>
          <div class="ray ray3"></div>
          <div class="ray ray4"></div>
          <div class="ray ray5"></div>
          <div class="ray ray6"></div>
          <div class="ray ray7"></div>
          <div class="ray ray8"></div>
          <div class="ray ray9"></div>
          <div class="ray ray10"></div>
        </div>
      </div>
      <!-- 	<div class="cloudwrapperOne">
		<div class="cloud c1"></div>
	</div -->
      <div class="cloudwrapperTwo">
        <div class="cloud c2"></div>
      </div>
      <div class="cloudwrapperThree">
        <div class="cloud c3"></div>
      </div>
    </div>
    <div id="moonlight_animation">
      <div class="theMoon">
        <div class="ray_box">
          <div class="ray ray1"></div>
          <div class="ray ray2"></div>
          <div class="ray ray3"></div>
          <div class="ray ray4"></div>
          <div class="ray ray5"></div>
          <div class="ray ray6"></div>
          <div class="ray ray7"></div>
          <div class="ray ray8"></div>
          <div class="ray ray9"></div>
          <div class="ray ray10"></div>
        </div>
      </div>
      <!-- 	<div class="cloudwrapperOne">
		<div class="cloud c1"></div>
	</div -->
      <div class="cloudwrapperTwo">
        <div class="cloud c2"></div>
      </div>
      <div class="cloudwrapperThree">
        <div class="cloud c3"></div>
      </div>
    </div>
    <div id="snow_animation"></div>
    <div id="cloudy_animation">
      <div id="clouds">
        <div class="cloudy x1"></div>
        <!-- Time for multiple clouds to dance around -->
        <div class="cloudy x2"></div>
        <div class="cloudy x3"></div>
        <div class="cloudy x4"></div>
        <div class="cloudy x5"></div>
      </div>
    </div>
  </div>
</template>

<script>
import snowfall from "../snowfall.js";

export default {
  props: {
    weather: [String],
  },
  created() {},
  watch: {
    weather: function (newVal) {
      if (newVal === "snow" || newVal === "light snow" || newVal === "heavy snow") {
        this.toggleDisplay("sunny_animation", "none");
        this.toggleDisplay("moonlight_animation", "none");
        this.toggleDisplay("snow_animation", "block");
        this.toggleDisplay("cloudy_animation", "none");
        snowfall.snowfall_animation();
      }

      if (
        (newVal === "clear sky" && this.isDaytime()) ||
        (newVal === "few clouds" && this.isDaytime())
      ) {
        this.toggleDisplay("sunny_animation", "block");
        this.toggleDisplay("moonlight_animation", "none");
        this.toggleDisplay("snow_animation", "none");
        this.toggleDisplay("cloudy_animation", "none");
      }

      if (
        (newVal === "clear sky" && !this.isDaytime()) ||
        (newVal === "few clouds" && !this.isDaytime())
      ) {
        this.toggleDisplay("sunny_animation", "none");
        this.toggleDisplay("moonlight_animation", "block");
        this.toggleDisplay("snow_animation", "none");
        this.toggleDisplay("cloudy_animation", "none");
      }

      if (newVal === "scattered clouds" || newVal === "broken clouds") {
        this.toggleDisplay("sunny_animation", "none");
        this.toggleDisplay("moonlight_animation", "none");
        this.toggleDisplay("snow_animation", "none");
        this.toggleDisplay("cloudy_animation", "block");
      }
    },
  },
  methods: {
    isDaytime() {
      let today = new Date();
      let time = today.getHours();
      return time >= 7 && time <= 18;
    },
    toggleDisplay(divId, display) {
      document.getElementById(divId).style.display = display;
    },
  },
};
</script>

<style scoped>
.animationClass {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
#snow_animation {
  display: none;
}
</style>