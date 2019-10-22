<template>
  <div class="contact-us">
    <div class="container">
      <div class="first" v-scroll-reveal.reset="{delay:300,scale:2}">
        <h1>Are you hungry?</h1>
      </div>
      <div
        class="second"
        v-scroll-reveal.reset="{delay:400,afterReveal:()=>{
          secondAnimation=true}}"
      >
        <div v-if="secondAnimation">
          <Animation></Animation>
        </div>
      </div>
      <div class="third">
        <p>Call us: 666-6666</p>
      </div>
    </div>
  </div>
</template>

<script>
import Animation from "./Animation";
export default {
  data() {
    return {
      secondAnimation: false
    };
  },
  components: {
    Animation
  }
};
</script>

<style>
.contact-us {
  font-family: "Mansalva", sans-serif;
  background: #b6aa3e;
  text-align: center;
  margin-top: 20px;
  padding: 30px 0px;
}

.contact-us .first {
  padding: 20px 0px;
}
.contact-us .first h1 {
  font-size: 80px;
  margin: 0px;
  line-height: 150px;
  color: black;
}

.contact-us .second {
  height: 200px;
}

.contact-us .third {
  font-weight: 700;
  font-size: 60px;
  line-height: 150px;
  color: black;
}

.contact-us .third span:first-child {
  color: #171717;
}
</style>

