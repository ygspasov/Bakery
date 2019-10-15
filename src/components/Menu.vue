<template>
  <div>
    <div class="container menu_container">
      <div class="top">
        <h2>Menu</h2>
      </div>
      <div class="buttons">
        <md-button
          v-for="(button,index) in buttons"
          :key="index"
          :class="button.active? 'md-raised':''"
          @click="changeButtonClass(button.name)"
        >{{button.name}}</md-button>
      </div>
      <div class="products-items">
        <md-card v-for="(product,i) in products" :key="i">
          {{product}}
          <md-card-media md-ratio="4:3">
            <img :src="require(`../assets/images/products/${product.img}`)" />
          </md-card-media>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { name: "bread", active: true },
        { name: "cookies", active: false },
        { name: "rolls", active: false },
        { name: "muffins", active: false }
      ],
      products: []
    };
  },
  methods: {
    changeButtonClass(name) {
      this.buttons.forEach(button => {
        button.name == name ? (button.active = true) : (button.active = false);
      });
    }
  },
  created() {
    this.$http
      .get("products.json")
      .then(response => response.json())
      .then(data => {
        let list = [];
        for (let key in data) {
          list.push({
            ...data[key],
            id: key
          });
        }
        this.products = list;
        console.log(this.products);
      });
  }
};
</script>

<style scoped>
.menu_container .top h2 {
  font-family: "Mansava", sans-serif;
}

.products-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.md-card {
  width: 32%;
  padding: 10px;
  margin-bottom: 10px;
}
</style>