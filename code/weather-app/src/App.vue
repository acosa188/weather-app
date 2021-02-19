<template>
  <div id="app">
    <Background />

  </div>
</template>

<script>
import Background from './components/Background.vue'

export default {
  name: 'App',
  components: {
    Background,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,body{
  height: 100%;
  margin: 0;
}

/* snow css */
.flake path{
  fill:#fff;
}

.flake-wrapper{
  position:absolute;
  z-index:999;
}

@keyframes falling{
  0%{
    top:-50px;
    opacity:1;
  }
  50%{
    opacity:1;
  }
  80%{
    opacity:0;
  }
  100%{
    top:100%;
    opacity:0;
  }
}

.flake{
  width:100%;
  height:100%;
}

/* Cloudy Animation */
#cloudy_animation{
  display: none;
}

#clouds{
	padding: 100px 0;
	background: -webkit-linear-gradient(top, #c9dbe9 0%, #fff 100%);
	background: -linear-gradient(top, #c9dbe9 0%, #fff 100%);
	background: -moz-linear-gradient(top, #c9dbe9 0%, #fff 100%);
}

/*Time to finalise the cloud shape*/
.cloudy {
	width: 200px; height: 60px;
	background: #fff;
	
	border-radius: 200px;
	-moz-border-radius: 200px;
	-webkit-border-radius: 200px;
	
	position: relative; 
}

.cloudy:before, .cloudy:after {
	content: '';
	position: absolute; 
	background: #fff;
	width: 100px; height: 80px;
	position: absolute; top: -15px; left: 10px;
	
	border-radius: 100px;
	-moz-border-radius: 100px;
	-webkit-border-radius: 100px;
	
	-webkit-transform: rotate(30deg);
	transform: rotate(30deg);
	-moz-transform: rotate(30deg);
}

.cloudy:after {
	width: 120px; height: 120px;
	top: -55px; left: auto; right: 15px;
}

/*Time to animate*/
.x1 {
	-webkit-animation: moveclouds 15s linear infinite;
	-moz-animation: moveclouds 15s linear infinite;
	-o-animation: moveclouds 15s linear infinite;
}

/*variable speed, opacity, and position of clouds for realistic effect*/
.x2 {
	left: 200px;
	
	-webkit-transform: scale(0.6);
	-moz-transform: scale(0.6);
	transform: scale(0.6);
	opacity: 0.6; /*opacity proportional to the size*/
	
	/*Speed will also be proportional to the size and opacity*/
	/*More the speed. Less the time in 's' = seconds*/
	-webkit-animation: moveclouds 25s linear infinite;
	-moz-animation: moveclouds 25s linear infinite;
	-o-animation: moveclouds 25s linear infinite;
}

.x3 {
	left: -250px; top: -200px;
	
	-webkit-transform: scale(0.8);
	-moz-transform: scale(0.8);
	transform: scale(0.8);
	opacity: 0.8; /*opacity proportional to the size*/
	
	-webkit-animation: moveclouds 20s linear infinite;
	-moz-animation: moveclouds 20s linear infinite;
	-o-animation: moveclouds 20s linear infinite;
}

.x4 {
	left: 470px; top: -250px;
	
	-webkit-transform: scale(0.75);
	-moz-transform: scale(0.75);
	transform: scale(0.75);
	opacity: 0.75; /*opacity proportional to the size*/
	
	-webkit-animation: moveclouds 18s linear infinite;
	-moz-animation: moveclouds 18s linear infinite;
	-o-animation: moveclouds 18s linear infinite;
}

.x5 {
	left: -150px; top: -150px;
	
	-webkit-transform: scale(0.8);
	-moz-transform: scale(0.8);
	transform: scale(0.8);
	opacity: 0.8; /*opacity proportional to the size*/
	
	-webkit-animation: moveclouds 20s linear infinite;
	-moz-animation: moveclouds 20s linear infinite;
	-o-animation: moveclouds 20s linear infinite;
}

@-webkit-keyframes moveclouds {
	0% {margin-right: 0px;}
	100% {margin-left: 100%;}
}
@-moz-keyframes moveclouds {
	0% {margin-right: 0px;}
	100% {margin-left: 100%;}
}
@-o-keyframes moveclouds {
	0% {margin-right: 0px;}
	100% {margin-left: 1000px;}
}

/* Moon Animation */
#moonlight_animation{
  animation: skyChange 60s linear infinite;
	background: rgba(255, 255, 255, 0.192);
}
/* Container - Sky*/
#moonlight_animation {
	width:100%;
	height: 100%;
  margin-top: -10px;
  display: none;
}
/* Sunny Animation */

#sunny_animation{
  animation: skyChange 60s linear infinite;
	background: rgba(255, 255, 255, 0.192);
}
/* Container - Sky*/
#sunny_animation {
	width:100%;
	height: 100%;
  margin-top: -10px;
  display: none;
}

/* Moon */
.theMoon{
	opacity: 1;
	box-shadow: 0px 0px 15px 3px rgb(255, 255, 255);
	width: 100px;
	height: 100px;
	position: absolute;
	top: 15vh;
	left: 30vw;
	animation: moonpulse 2s alternate infinite;
	border-radius: 50%;
	background-image: radial-gradient(circle, #ddfbff 95%, #ddfbff);
}

@keyframes moonpulse {
	from {
		box-shadow: 0 0 100px rgb(193, 225, 255), 0 0 100px rgb(193, 225, 255);
	}
	to {
		box-shadow: 0 0 25px rgb(193, 225, 255), 0 0 75px rgb(193, 225, 255);
	}
}

/* Standard syntax */
@keyframes skyChange {
	0% {
		background: rgba(255, 255, 255, 0.048);
	}
	25% {
		background: rgba(255, 255, 255, 0.048);
	}
	32% {
		background: rgba(240, 248, 255, 0.815);
	}
	41% {
		background: rgba(255, 255, 255, 0.048);
	}
	70% {
		background: rgba(255, 255, 255, 0.048);
	}
	100% {
		background: #00d0ff2a; /* fallback for old browsers */
		background: -webkit-linear-gradient(
			to right,
			#ebd9401c,
			#fff8992d
		); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(
			to right,
			#ebd9401c,
			#fff8992d
		); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
}



/* Sun  */
.theSun {
	opacity: 1;
	box-shadow: 0px 0px 15px 3px yellow;
	width: 100px;
	height: 100px;
	position: absolute;
	top: 15vh;
	left: 30vw;
	animation: sunpulse 2s alternate infinite;
	border-radius: 50%;
	background-image: radial-gradient(circle, #ffd200 95%, #f7971e);
}

@keyframes sunpulse {
	from {
		box-shadow: 0 0 100px #ff0, 0 0 100px #ff0;
	}
	to {
		box-shadow: 0 0 25px #ff0, 0 0 75px #ff0;
	}
}

/* Clouds */

.cloudwrapperOne,
.cloudwrapperTwo,
.cloudwrapperThree {
	animation: movecloudsoversky 60s linear infinite;
	animation-delay: -1s;
	z-index: 2001;
}

.cloudwrapperTwo {
	animation-delay: -1s;
}

.cloudwrapperThree {
	animation-delay: -2s;
}

.cloud {
	width: 200px;
	height: 60px;
	background: white;
	position: relative;
	border-radius: 200px;
	z-index: 2000;
}

.cloud:before,
.cloud:after {
	content: "";
	background: white;
	position: absolute;
	width: 100px;
	height: 80px;
	top: -15px;
	left: 10px;
	border-radius: 100px;
	transform: rotate(30deg);
}

.cloud:after {
	width: 120px;
	height: 120px;
	top: -55px;
	left: auto;
	right: 15px;
}

.c1 {
	margin-top: -20px;
	animation-delay: -2s;
}

.c2 {
	margin-top: 10px;
	animation-delay: -18s;
}

.c3 {
	margin-top: 5px;
	animation-delay: -7s;
}

@keyframes movecloudsoversky {
	0% {
		transform: translate(-25%, 10vh);
		opacity: 0.8;
	}
	50% {
		opacity: 0.8;
	}
	100% {
		transform: translate(125%, 10vh);
		opacity: 0.4;
	}
}

/* Sun rays */

.ray_box {
	position: absolute;
	margin: auto;
	top: 0px;
	left: 0;
	right: 0;
	bottom: 0;
	width: 70px;
	animation: ray_anim 120s linear infinite;
}

.ray {
	background: -webkit-linear-gradient(
		top,
		rgba(255, 255, 255, 0) 0%,
		rgba(255, 255, 255, 0.8) 50%,
		rgba(255, 255, 255, 0) 100%
	);
	background: linear-gradient(
		top,
		rgba(255, 255, 255, 0) 0%,
		rgba(255, 255, 255, 0.8) 50%,
		rgba(255, 255, 255, 0) 100%
	);
	margin-left: 10px;
	border-radius: 80% 80% 0 0;
	position: absolute;
	opacity: 0.1;
}

.ray1 {
	height: 170px;
	width: 30px;
	transform: rotate(180deg);
	top: -175px;
	left: 15px;
}

.ray2 {
	height: 100px;
	width: 8px;
	transform: rotate(220deg);
	top: -90px;
	left: 75px;
}

.ray3 {
	height: 170px;
	width: 50px;
	transform: rotate(250deg);
	top: -80px;
	left: 100px;
}

.ray4 {
	height: 120px;
	width: 14px;
	transform: rotate(305deg);
	top: 30px;
	left: 100px;
}

.ray5 {
	height: 140px;
	width: 30px;
	transform: rotate(-15deg);
	top: 60px;
	left: 40px;
}

.ray6 {
	height: 90px;
	width: 50px;
	transform: rotate(30deg);
	top: 60px;
	left: -40px;
}

.ray7 {
	height: 180px;
	width: 10px;
	transform: rotate(70deg);
	top: -35px;
	left: -40px;
}

.ray8 {
	height: 120px;
	width: 30px;
	transform: rotate(100deg);
	top: -45px;
	left: -90px;
}

.ray9 {
	height: 80px;
	width: 10px;
	transform: rotate(120deg);
	top: -65px;
	left: -60px;
}

.ray10 {
	height: 190px;
	width: 23px;
	transform: rotate(150deg);
	top: -185px;
	left: -60px;
}

@keyframes ray_anim {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

</style>
