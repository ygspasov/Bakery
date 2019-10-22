<template>
  <div class="animation-container">
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" appear>
      <div class="icon icon-phone" delay="0" left="100"></div>
    </transition>
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" appear>
      <div class="icon icon-plus" delay="500" left="300"></div>
    </transition>
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" appear>
      <div class="icon icon-van" delay="1000" left="500"></div>
    </transition>
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" appear>
      <div class="icon icon-equal" delay="1500" left="720"></div>
    </transition>
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" appear>
      <div class="icon icon-bread" delay="2000" left="930"></div>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    beforeEnter(el) {
      el.style.left = "-200x";
      el.style.opacity = "0";
    },
    enter(el, done) {
      let delay = parseInt(el.getAttribute("delay"));
      let left = parseInt(el.getAttribute("left"));
      Velocity(
        el,
        { opacity: 1, left: left },
        { delay, duration: 1000, complete: done }
      );
    }
  }
};
</script>

<style>
.animation-container {
  position: relative;
  height: 200px;
}
.icon {
  background-size: cover;
  position: absolute;
}
.icon-phone {
  background: url("../../assets/images/animation/phone.svg");
  width: 130px;
  height: 130px;
  top: 30px;
}
.icon-plus {
  position: absolute;
  background: url("../../assets/images/animation/plus.svg");
  font-size: 160px;
  width: 130px;
  height: 130px;
  top: 30px;
}
.icon-van {
  position: absolute;
  background: url("../../assets/images/animation/van.svg");
  font-size: 160px;
  width: 170px;
  height: 170px;
  top: 20px;
}
.icon-equal {
  position: absolute;
  background: url("../../assets/images/animation/equal.svg");
  font-size: 130px;
  width: 130px;
  height: 130px;
  top: 30px;
}
.icon-bread {
  position: absolute;
  background: url("../../assets/images/animation/bread.svg");
  font-size: 110px;
  width: 130px;
  height: 130px;
  top: 30px;
}
</style>