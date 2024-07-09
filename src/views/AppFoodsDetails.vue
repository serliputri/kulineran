<template>
  <div class="food-detail">
    <AppNavbar />
    <div class="container">

      <!-- breadcrumb -->
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark">Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Food Order</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
          <img :src="require(`../assets/images/${product.gambar}`)" class="img-fluid shadow"/>
        </div>
        <div class="col-md-6">
          <h2><strong>{{ product.nama }}</strong></h2>
          <hr>
          <h4>Harga: <strong>Rp. {{ product.harga}}</strong></h4>
          <form>
            <div class="form-group">
              <label for="jumlah_pemesanan"> Jumlah Pesan</label>
              <input type="number" class="form-control">
            </div>
            <div class="form-group">
              <label for="keterangan">Keterangan</label>
              <textarea class="form-control" placeholder="Contoh: Pedas/Nasi Setengah/dll"></textarea>
            </div>

            <button type="submit" class="btn btn-success"><b-icon-cart></b-icon-cart>Pesan</button>
          </form>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar.vue";
import axios from "axios";

export default {
  name: "AppFoodsDetails",
  components: {
    AppNavbar,
  },
  data(){
    return{
      product:{}
    }
  },
  methods:{
    setProduct(data){
      this.product = data
    }
  },
  mounted(){
    axios
      .get("http://localhost:3000/products/"+this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  }
};
</script>

<style>
</style>