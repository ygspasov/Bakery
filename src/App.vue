<template>
  <div id="app">
    <Header></Header>
    <Featured></Featured>
    <Menu></Menu>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import Menu from "./components/Menu";
export default {
  name: "app",
  components: {
    Header,
    Footer,
    Featured,
    Menu
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.clear:after {
  content: "";
  display: table;
  clear: both;
}

/* MENU */

.menu_container .top {
  margin-top: 80px;
}

.menu_container .top h2 {
  text-align: center;
  font-size: 50px;
  color: #703901;
  border-bottom: 1px solid #d4d4d4;
  line-height: 90px;
  margin: 0px 0px;
}

.menu_container .buttons {
  text-align: center;
  border-bottom: 1px solid #d4d4d4;
  margin-bottom: 40px;
}

/* MENU */

.call_us_container {
  background: #c10a28;
  text-align: center;
  margin: 110px 0px;
  padding: 40px 0px 70px 0px;
}

.call_us_container .first {
  padding: 20px 0px;
}
.call_us_container .first h1 {
  font-size: 80px;
  margin: 0px;
  line-height: 150px;
  color: #fff;
}

.call_us_container .second {
  height: 200px;
}

.call_us_container .third {
  font-weight: 700;
  font-size: 60px;
  line-height: 150px;
  color: #fff;
}

.call_us_container .third span:first-child {
  color: #171717;
}

/* MENU */

.newsl_container h2 {
  font-size: 28px;
  color: #343434;
  text-align: center;
}

.newsl_container .form {
  text-align: center;
}
.newsl_container .form input {
  font-size: 20px;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #d7d7d7;
}
.newsl_container .form button {
  background: #c10929;
  color: #fff;
  font-size: 20px;
  padding: 10px;
}

.newsl_container .small {
  width: 460px;
  margin: 0 auto;
  text-align: center;
  font-size: 12px;
}

.newsl_container .error_label {
  text-align: center;
  margin: 20px 0px;
  color: #c10929;
  font-size: 20px;
}

.newsl_container .success_label {
  text-align: center;
  margin: 20px 0px;
  color: #2196f3;
  font-size: 20px;
}

.VueCarousel-dot-container {
  margin-top: -15px !important;
}
</style>
