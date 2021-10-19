<template>
  <main id="app">
    <Header></Header>
    <div class="main">
      <router-view />
    </div>
    <Footer></Footer>
  </main>
</template>

<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
