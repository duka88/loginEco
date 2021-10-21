<template>
  <main id="app">
    <Header></Header>
    <transition name="slide-fade">
      <Toster v-if="toster.msg"></Toster>
    </transition>
    <div class="main">
      <router-view />
    </div>
    <Footer></Footer>
  </main>
</template>

<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Toster from "./components/shared/Toster";
export default {
  components: {
    Header,
    Footer,
    Toster,
  },
  computed: {
    toster() {
      return this.$store.state.utils.toster;
    },
  },
};
</script>
