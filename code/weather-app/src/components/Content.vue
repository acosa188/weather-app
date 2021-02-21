<template>
  <div class="contentClass">
    <div class="container">
      <div class="cityName">{{city}}</div>
      <div class="temperatureFont">{{Math.floor(temperature)}}°<span>C</span></div>
      <img :src="iconUrl" alt="" />
      <div class="d-flex justify-content-between">
        <div class="item">
          <h5>Wind</h5>
          <h2>{{wind_speed}} m/s</h2>
        </div>
        <div class="item">
          <h5>Humidity</h5>
          <h2>{{humidity}}%</h2>
        </div>
      </div>
      <div class="dateClass mt-5"><h5>{{currentDate()}}</h5></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: mapState({
        city: (state) => state.location.city,
        temperature: (state) => state.weather.temperature,
        description: (state) => state.weather.description,
        iconUrl: (state) => state.weather.iconUrl,
        humidity: (state) => state.weather.humidity,
        wind_speed: (state) => state.weather.wind_speed
    }),
    methods:{
      currentDate(){
        let today = new Date()
        let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
        return `${month[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`
      }
    }
};
</script>

<style scoped>
.contentClass {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin-top: 50px;
  color: aliceblue;
}

.cityName {
  font-size: 4rem;
}

.temperatureFont {
  margin-top: -10px;
  font-size: 8rem;
  font-weight: bolder;
  opacity: 0.9;
}

img {
  margin-top: -60px;
}

span{
  font-weight: normal;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .cityName {
    font-size: 5rem;
  }

  .temperatureFont {
    font-size: 9rem;
  }

  h5 {
    font-size: 1.5rem;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .cityName {
    font-size: 6rem;
  }

  .temperatureFont {
    font-size: 10rem;
    margin-top: 0;
  }

  h5 {
    font-size: 1.75rem;
  }

  img {
    margin-top: 0;
  }
}
</style>