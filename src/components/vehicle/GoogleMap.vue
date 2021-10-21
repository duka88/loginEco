<template>
  <div class="map">
    <div class="map__wrap">
      <GmapMap
        :center="{ lat: 10, lng: 10 }"
        :zoom="7"
        map-type-id="terrain" 
        ref="mapRef"   
      >
      </GmapMap>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoogleMap",
  data(){
      return {
          map: ''
      }
  },
  computed:{
      markers(){
     
          return  this.$store.state.vehicle
      }
  },
  mounted() {
      this.$refs.mapRef.$mapPromise.then(map => this.map = map)
  }
};
</script>
