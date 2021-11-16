<template>
  <div class="section">
    <UploadVehicle></UploadVehicle>
    <transition name="fade" mode="out-in">
      <Loader v-if="this.vehicles.length == 0"></Loader>
      <List v-else></List>
    </transition>
  </div>
</template>

<script>
import UploadVehicle from "../components/vehicle/UploadVehicle.vue"
import List from "../components/vehicle/List"
import Loader from "../components/shared/Loader"
import { mapState, mapActions } from "vuex"
export default {
  name: "Home",
  components: {
    UploadVehicle,
    List,
    Loader,
  },
  computed: {
    ...mapState("vehicles", ["vehicles"]),
  },
  methods: {
    ...mapActions("vehicles", ["getVehicles"]),
  },
  created() {
    if (this.vehicles.length == 0) {
      this.getVehicles()
    }
  },
}
</script>
