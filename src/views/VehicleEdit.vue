<template>
  <div>
    <transition name="fade" mode="out-in">
      <Loader v-if="loader"></Loader>
      <section v-else class="section">
        <Header
          v-if="!vehicle['Serial number']"
          :link="true"
          title="No vehicle found"
        ></Header>
        <div v-else>
          <Header
            :title="vehicle['Serial number']"
            :subtitle="vehicle['Date/Time']"
            :link="false"
          ></Header>
          <EditForm v-if="vehicle.img" :vehicle="vehicle"></EditForm>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
import Header from "../components/vehicle/Header";
import EditForm from "../components/vehicle/EditForm";
import { mapState, mapActions } from "vuex";
import Loader from "../components/shared/Loader";
export default {
  name: "EditVehicle",
  components: {
    Header,
    EditForm,
    Loader,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({ vehicle: (state) => state.vehicles.editVehicle }),
    ...mapState("utils", ["loader"]),
  },
  methods: {
    ...mapActions("vehicles", ["setEdit"]),
    ...mapActions("utils", ["triggerLoader"]),
    getVehicle() {
      this.$route.query.id;
      this.$route.query.date;
      const decode = this.$route.query.date
        .replaceAll("_", " ")
        .replaceAll("-", ":");

      const date = new Date(decode).getTime().toString();
      if (Object.keys(this.vehicle).length === 0) {
        this.setEdit({
          id: this.$route.query.id,
          date: date,
        });
      }
    },
  },

  created() {
    if (!this.vehicle["Serial number"]) {
      this.triggerLoader(true);
      this.getVehicle();
    }
  },
};
</script>
