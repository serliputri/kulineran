<template>
  <div>
    <AppNavbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Daftar <strong>Makanan</strong></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Makanan Kesukaan Anda .."
              aria-label="Cari"
              aria-describedby="basic-addon1"
              @keyup="searchFood"
            />
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <b-icon-search></b-icon-search>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-4">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <AppCardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppNavbar from "@/components/AppNavbar.vue";
import AppCardProduct from "@/components/AppCardProduct.vue";
import axios from "axios";

export default {
  name: "AppFoods",
  components: {
    AppNavbar,
    AppCardProduct,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchFood() {
      axios
      .get("http://localhost:3000/products?q="+this.search)
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>