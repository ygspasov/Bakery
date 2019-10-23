<template>
  <div class="contaier newsletter-container">
    <h2>Subscribe to our newsletter!</h2>
    <div class="form">
      <input type="text" v-model="email" />
      <button @click="submitHandler">Sign me up</button>
    </div>
    <div class="error-label">{{errorMsg}}</div>
    <div class="success-label">{{successMsg}}</div>
    <div
      class="small"
    >Subscribers get exclusive offers that let them take advantage of special bakery products that regular readers don't get.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      errorMsg: "",
      successMsg: ""
    };
  },
  methods: {
    validate(email) {
      let valid = [true, ""];

      if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        )
      ) {
        valid = [false, "Incorrect email"];
      }
      if (email === "") {
        valid = [false, "Empty imput!"];
      }
      return valid;
    },

    submitHandler() {
      let valid = this.validate(this.email);
      if (valid[0]) {
        this.errorMsg = "";
        this.includeEmail(this.email);
      } else {
        this.errorMsg = valid[1];
      }
    },
    includeEmail(email) {
      this.$http
        .get(`users.json?orderBy=\"email\"&&equalTo=\"${email}\"`)
        .then(response => {
          if (Object.getOwnPropertyNames(response.data).length === 0) {
            this.$http
              .post("users.json", { email: this.email })
              .then(response => {
                this.successMsg = "Subscribed!";
              });
          } else {
            this.successMsg = "The user is already subscribed.";
          }
        });
      this.clear();
    },
    clear() {
      setTimeout(() => {
        this.email = "";
        this.successMsg = "";
      }, 3500);
    }
  }
};
</script>

<style>
.newsletter-container {
  text-align: center;
  padding: 20px 0 30px 0;
}
.newsletter-container .form input {
  font-size: 20px;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #d7d7d7;
}
.newsletter-container .form button {
  background: #7d4304;
  color: #fff;
  font-size: 20px;
  padding: 10px;
}

.newsletter-container .small {
  width: 460px;
  margin: 0 auto;
  text-align: center;
  font-size: 12px;
}

.newsletter-container .error-label {
  text-align: center;
  margin: 20px 0px;
  color: #c10929;
  font-size: 20px;
}

.newsletter-container .success-label {
  text-align: center;
  margin: 20px 0px;
  color: #2196f3;
  font-size: 20px;
}
</style>