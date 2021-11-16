<template>
  <div>
    <transition name="fade" mode="out-in">
      <Loader v-if="!vehicle['Serial number']"></Loader>
      <section v-else class="section">
        <Header
          :title="vehicle['Serial number']"
          :subtitle="vehicle['Date/Time']"
        ></Header>
        <EditForm v-if="vehicle.img" :vehicle="vehicle"></EditForm>
      </section>
    </transition>
  </div>
</template>

<script>
import Header from "../components/vehicle/Header"
import EditForm from "../components/vehicle/EditForm"
import { mapState, mapActions } from "vuex"
import Loader from "../components/shared/Loader"
export default {
  name: "EditVehicle",
  components: {
    Header,
    EditForm,
    Loader,
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions("vehicles", ["setEdit"]),
    getVehicle() {
      this.$route.query.id
      this.$route.query.date
      const decode = this.$route.query.date
        .replaceAll("_", " ")
        .replaceAll("-", ":")

      const date = new Date(decode).getTime().toString()
      if (Object.keys(this.vehicle).length === 0) {
        this.setEdit({
          id: this.$route.query.id,
          date: date,
        })
      }
    },
  },
  computed: {
    ...mapState({ vehicle: (state) => state.vehicles.editVehicle }),
  },
  created() {
    this.getVehicle()
  },
}
</script>
