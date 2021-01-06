<template>
  <div class="container" style="width=100%">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>


<script>
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>



