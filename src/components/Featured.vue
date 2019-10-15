<template>
  <div>
    <carousel
      :per-page="1"
      :mouse-drag="true"
      :autoplay="true"
      :loop="true"
      :paginationSize="16"
      style="margin-top: 0"
    >
      <slide v-for="(slide,index) in slides" :key="index">
        <div class="slider_bck" :style="{'background':`url(${slide.backgroundImg})`}">
          <div class="container slider-container">
            <div class="text">{{slide.text}}</div>
            <div class="image">
              <img :src="slide.img" alt />
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import Slide1 from "../assets/images/background4.jpg";
import Slide2 from "../assets/images/background5.jpg";
import Slide3 from "../assets/images/background6.jpg";

import breadOne from "../assets/images/products/farmer's bread.jpg";
import breadTwo from "../assets/images/products/loafOfBread.jpg";
import breadThree from "../assets/images/products/wholeWheatBread.jpg";
export default {
  data() {
    return {
      slides: [
        {
          text: "25% off Farmer's bread!",
          backgroundImg: Slide1,
          img: breadOne
        },
        {
          text: "Buy two loafs of bread and get one free!",
          backgroundImg: Slide2,
          img: breadTwo
        },
        {
          text: "13% off on Whole Wheat Bread this week!",
          backgroundImg: Slide3,
          img: breadThree
        }
      ]
    };
  }
};
</script>

<style scoped>
div {
  font-family: "Mansalva", sans-serif;
}

.slider_bck {
  height: 850px;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}

.slider-container {
  display: flex;
}

.slider-container .text {
  font-family: "Mansalva", sans-serif;
  color: #fff;
  font-size: 100px;
  line-height: 150px;
  width: 690px;
  margin-top: 210px;
}

.slider-container .image {
  flex-grow: 1;
  width: 370px;
  text-align: center;
}

.slider-container .image img {
  width: 600px;
  height: 400px;
  margin-top: 244px;
}

.VueCarousel {
  background: #703901;
}
</style>