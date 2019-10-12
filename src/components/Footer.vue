<template>
  <footer>
    <div class="container">
      <img :src="Logo" />
      <div class="contact">
        <div>Call us</div>
        <div>4234-54345</div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "../assets/images/logo.png";
export default {
  data() {
    return {
      Logo
    };
  }
};
</script>

<style scoped>
footer {
  margin-top: 130px;
  background: #212121;
  color: #f8ce7a;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  padding: 40px 0px;
}

footer .contact {
  border-top: 1px solid #f8ce7a;
  padding: 20px;
}

footer .container {
  text-align: center;
}
</style>