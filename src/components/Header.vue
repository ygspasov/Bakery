<template>
  <header>
    <div class="container">
      <div class="logo">
        <img :src="Logo" />
      </div>
      <div class="nav">
        <img :src="Menu" @click="showPanel=!showPanel" />
      </div>
      <md-drawer :md-active.sync="showPanel" :md-right="true" />
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
      Menu,
      showPanel: false
    };
  }
};
</script>

<style scoped>
header {
  background: #703901;
  padding: 20px;
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
  justify-content: space-between;
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