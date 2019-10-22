<template>
  <div id="app">
    <Header></Header>
    <Featured></Featured>
    <Menu></Menu>
    <ContactUs></ContactUs>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import Menu from "./components/Menu";
import ContactUs from "./components/ContactUs/ContactUs";
export default {
  name: "app",
  components: {
    Header,
    Footer,
    Featured,
    Menu,
    ContactUs
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
