<template>
  <section class="section">
    <Header
      :title="vehicle['Serial number']"
      :subtitle="vehicle['Date/Time']"
    ></Header>
    <EditForm v-if="vehicle.img" :vehicle="vehicle"></EditForm>
  </section>
</template>

<script>
import Header from "../components/vehicle/Header";
import EditForm from "../components/vehicle/EditForm";
export default {
  name: "EditVehicle",
  components: {
    Header,
    EditForm,
  },
  data() {
    return {};
  },
  methods: {
    getVehicle() {
      this.$route.query.id;
      this.$route.query.date;
      const decode = this.$route.query.date
        .replaceAll("_", " ")
        .replaceAll("-", ":");

      const date = new Date(decode).getTime().toString();
      if (Object.keys(this.vehicle).length === 0) {
        this.$store.dispatch("vehicles/setEdit", {
          id: this.$route.query.id,
          date: date,
        });
      }
    },
  },
  computed: {
    vehicle() {
      return this.$store.state.vehicles.editVehicle;
    },
  },
  mounted() {
    this.getVehicle();
  },
};
</script>
