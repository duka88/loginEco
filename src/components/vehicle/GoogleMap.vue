<template>
  <div class="map">
    <div class="map__wrap">
      <div class="map__btn-wrap">
        <div @click="drawLine()" class="btn">Draw Rute</div>
        <select
          class="btn btn--select"
          @change="setMarker()"
          v-model="markerIndex"
        >
          <option value="Select Time" disabled>Select Time</option>
          <option
            :value="index"
            v-for="(marker, index) in markers"
            :key="index"
          >
            {{ marker["Date/Time"] }}
          </option>
        </select>
      </div>
      <GmapMap :center="center" :zoom="20" map-type-id="terrain" ref="mapRef">
        <GmapMarker
          v-if="marker.lng"
          :position="marker"
          :clickable="true"
          :draggable="true"
          @click="setInfo()"
        ></GmapMarker>
        <GmapInfoWindow
          v-if="infoWidow.position.lng"
          :position="infoWidow.position"
          :options="infoWidow.options"
          :opened="infoWidow.open"
        >
          <InfoWindow :info="infoWidow.data"></InfoWindow>
        </GmapInfoWindow>
        <GmapPolyline
          ref="mapPol"
          :path="path"
          :options="{ strokeColor: '#5FB924' }"
        >
        </GmapPolyline>
      </GmapMap>
    </div>
  </div>
</template>
<script>
import InfoWindow from "./InfoWindow"
import { mapState } from "vuex"
export default {
  name: "GoogleMap",
  components: {
    InfoWindow,
  },
  data() {
    return {
      map: "",
      marker: { lat: false, lng: false },
      markerIndex: "Select Time",
      center: { lat: 0, lng: 0 },
      infoWidow: {
        position: {
          lat: false,
          lng: false,
        },
        options: {
          pixelOffset: {
            width: 0,
            height: -35,
          },
        },
        data: {},
        open: false,
      },
      path: [],
    }
  },
  methods: {
    setMarker() {
      this.marker.lat = +this.markers[this.markerIndex]["GPS latitude [°]"]
      this.marker.lng = +this.markers[this.markerIndex]["GPS longitude [°]"]
      this.infoWidow.data.date = this.markers[this.markerIndex]["Date/Time"]
      this.infoWidow.data.speed = this.markers[this.markerIndex][
        "Engine speed [rpm]"
      ]
      this.infoWidow.data.fuel = this.markers[this.markerIndex][
        "Fuel consumption [l/h]"
      ]
      this.infoWidow.data.colTemp = this.markers[this.markerIndex][
        "Coolant temperature [°C]"
      ]
      this.infoWidow.data.ambTemp = this.markers[this.markerIndex][
        "Ambient temperature [°C]"
      ]
      this.center.lat = this.marker.lat
      this.center.lng = this.marker.lng
    },
    drawLine() {
      const path = this.markers.map((item) => {
        const obj = {}
        obj.lng = +item["GPS longitude [°]"]
        obj.lat = +item["GPS latitude [°]"]
        return obj
      })

      this.path = path
      this.center.lat = path[0].lat
      this.center.lng = path[0].lng
      this.map.fitBounds(this.$refs.mapPol.$map.getBounds())
    },
    setCenter() {
      this.center.lat = +this.markers[0]["GPS latitude [°]"]
      this.center.lng = +this.markers[0]["GPS longitude [°]"]
    },
    setInfo() {
      this.infoWidow.open = !this.infoWidow.open
      this.infoWidow.position = this.marker
    },
  },
  computed: {
    ...mapState({ markers: (state) => state.vehicles.vehicle }),
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => (this.map = map))
    this.setCenter()
  },
}
</script>
