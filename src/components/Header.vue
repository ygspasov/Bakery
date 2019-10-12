<template>
  <header>
    <div class="container">
      <div class="logo">
        <img :src="Logo" alt />
      </div>
      <div class="nav">
        <img :src="Menu" alt />
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "../assets/images/logo.png";
import Menu from "../assets/images/menu.png";

export default {
  data() {
    return {
      Logo,
      Menu
    };
  }
};
</script>

<style scoped>
header {
  background: #703901;
  padding: 30px 0px 10px 0px;
}

header .nav img {
  width: 75px;
  cursor: pointer;
}

header .side-drawer {
  background: #fff;
}

header .container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

header .nav img {
  background: #f8ce7a;
}
</style>