<template>
  <section class="section">
    <Header :title="$route.query.id" link="/"></Header>
    <Table></Table>
    <div class="btn w-100"  @click="map = !map" >See Map</div>
    <GoogleMap v-if="map"></GoogleMap>
  </section>
</template>

<script>
import Header from "../components/vehicle/Header";
import Table from "../components/vehicle/Table";
import GoogleMap from "../components/vehicle/GoogleMap";
export default {
  name: "Vehicle",
  data(){
    return {
        map: false
    }
  },

  components: {
    Header,
    Table,
     GoogleMap
  },
 
};
</script>
