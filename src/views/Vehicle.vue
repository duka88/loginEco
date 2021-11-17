<template>
  <div>
    <transition name="fade" mode="out-in">
      <Loader v-if="loader"></Loader>
      <section v-else class="section">
        <Header v-if="vehicle.length === 0" :link="true" title="No data found"></Header>
        <div v-else>
          <Header
            :title="`Serial Number: ${$route.query.id}`"
            :link="true"
          ></Header>
          <Table></Table>
          <div class="btn w-100" @click="map = !map">
            {{ map ? "Hide Map" : "Show Map" }}
          </div>
          <GoogleMap v-if="map"></GoogleMap>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
import Header from "../components/vehicle/Header";
import Table from "../components/vehicle/Table";
import GoogleMap from "../components/vehicle/GoogleMap";
import Loader from "../components/shared/Loader";
import { mapState, mapActions } from "vuex";
export default {
  name: "Vehicle",
  data() {
    return {
      map: false,
    };
  },

  components: {
    Header,
    Table,
    GoogleMap,
    Loader,
  },
  computed: {
    ...mapState("vehicles", ["vehicle"]),
    ...mapState("utils", ["loader"]),
  },
  methods: {
    ...mapActions("vehicles", ["getVehicle", "getPage", "resetPage"]),
    ...mapActions("utils", ["triggerLoader"]),
    checkPage() {
      if (this.$route.query.page > 1) {
        this.getPage({
          id: this.$route.query.id,
          prev: this.prev,
          limit: this.$route.query.perPage,
        });
      } else {
        this.resetPage();
        this.getVehicle({
          id: this.$route.query.id,
          prev: this.prev,
          limit: this.$route.query.perPage,
        });
      }
    },
  },
  created() {
    this.triggerLoader(true);
    this.checkPage();
  },
};
</script>
