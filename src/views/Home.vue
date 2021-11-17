<template>
  <div class="section">
    <UploadVehicle></UploadVehicle>
    <transition name="fade" mode="out-in">
      <Loader v-if="loader"></Loader>
      <div v-else>
        <Header v-if="vehicles.length === 0" :link="false" title="No vehicles found"></Header>
        <List v-else></List>
      </div>
    </transition>
  </div>
</template>

<script>
import UploadVehicle from "../components/vehicle/UploadVehicle.vue";
import Header from "../components/vehicle/Header";
import List from "../components/vehicle/List";
import Loader from "../components/shared/Loader";
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    UploadVehicle,
    List,
    Loader,
    Header,
  },
  computed: {
    ...mapState("vehicles", ["vehicles"]),
    ...mapState("utils", ["loader"]),
  },
  methods: {
    ...mapActions("vehicles", ["getVehicles"]),
    ...mapActions("utils", ["triggerLoader"]),
  },
  created() {
    if (this.vehicles.length === 0) {
      this.triggerLoader(true);
      this.getVehicles();
    }
  },
};
</script>
