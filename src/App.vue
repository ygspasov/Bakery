<template>
  <div id="app">
    <Header></Header>
    <Featured></Featured>
    <Menu></Menu>
    <ContactUs></ContactUs>
    <NewsLetter></NewsLetter>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import Menu from "./components/Menu";
import ContactUs from "./components/ContactUs/ContactUs";
import NewsLetter from "./components/newsletter/newsletter";
export default {
  name: "app",
  components: {
    Header,
    Footer,
    Featured,
    Menu,
    ContactUs,
    NewsLetter
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
</style>
