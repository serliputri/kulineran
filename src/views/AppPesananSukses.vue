<template>
  <div class="pesanan-sukses">
    <AppNavbar />
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col text-center">
          <img
            :src="require(`../assets/images/menunggu.png`)"
            width="300"
          />
          <h2><Strong>Sukses!!!</Strong></h2>
          <h4>
            Pesanan Anda Segera Kami Proses <br />
            Mohon Menunggu Pesanan Anda
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar.vue";
export default {
  name: "AppPesananSukses",
  components: {
    AppNavbar,
  },
};
</script>

<style>
</style>