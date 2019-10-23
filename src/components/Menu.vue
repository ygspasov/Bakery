<template>
  <div>
    <div class="container menu-container">
      <div class="top">
        <h2 v-scroll-reveal.reset>Menu</h2>
      </div>
      <div class="buttons" v-scroll-reveal.reset>
        <md-button
          v-for="(button,index) in buttons"
          :key="index"
          :class="button.active? 'md-raised':''"
          @click="changeButtonClass(button.name)"
        >{{button.name}}</md-button>
      </div>
      <div class="products-items" v-scroll-reveal.reset="{ delay: 500 }">
        <md-card v-show="product.type===chosenProduct" v-for="(product,i) in products" :key="i">
          <md-card-header>
            <p class="md-title">{{product.name}}</p>
            <h3>
              <strong>${{product.price}}</strong>
            </h3>
          </md-card-header>
          <md-card-media md-ratio="16/9">
            <img :src="require(`../assets/images/products/${product.img}`)" />
          </md-card-media>

          <md-card-content>{{product.desc}}</md-card-content>
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
      chosenProduct: "bread",
      products: []
    };
  },
  methods: {
    changeButtonClass(name) {
      this.buttons.forEach(button => {
        button.name == name ? (button.active = true) : (button.active = false);
      });
      this.chosenProduct = name;
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
      });
  }
};
</script>

<style scoped>
.menu-container .top h2 {
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
.md-card .md-card-header {
  padding-top: 0px;
}

.top {
  text-align: center;
}
.buttons.v-scroll-reveal {
  text-align: center;
  margin-bottom: 10px;
}
</style>