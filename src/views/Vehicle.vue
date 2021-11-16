<template>
  <div>
    <transition name="fade" mode="out-in">
      <Loader v-if="vehicle.length === 0"></Loader>
      <section v-else class="section">
        <Header :title="$route.query.id" link="/"></Header>
        <Table></Table>
        <div class="btn w-100" @click="map = !map">
          {{ map ? "Hide Map" : "Show Map" }}
        </div>
        <GoogleMap v-if="map"></GoogleMap>
      </section>
    </transition>
  </div>
</template>

<script>
import Header from "../components/vehicle/Header"
import Table from "../components/vehicle/Table"
import GoogleMap from "../components/vehicle/GoogleMap"
import Loader from "../components/shared/Loader"
import { mapState, mapActions } from "vuex"
export default {
  name: "Vehicle",
  data() {
    return {
      map: false,
    }
  },

  components: {
    Header,
    Table,
    GoogleMap,
    Loader,
  },
  computed: {
    ...mapState("vehicles", ["vehicle"]),
  },
  methods: {
    ...mapActions("vehicles", ["getVehicle", "getPage"]),
    checkPage() {
      if (this.$route.query.page > 1) {
        this.getPage({
          id: this.$route.query.id,
          prev: this.prev,
          limit: this.$route.query.perPage,
        })
      } else {
        this.getVehicle({
          id: this.$route.query.id,
          prev: this.prev,
          limit: this.$route.query.perPage,
        })
      }
    },
  },
  created() {
    this.checkPage()
  },
}
</script>
