<template>
  <div class="vehicle-table">
    <div class="vehicle-table__wrap">
      <table class="vehicle-table__table">
        <thead>
          <tr>
            <th class="vehicle-table__head" v-for="key in keys" :key="key">
              {{ key }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item['Date/Time']">
            <td class="vehicle-table__cell" v-for="key in keys" :key="key">
              {{ item[key] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="vehicle-table__pagination">
      <div class="btn">&lt;&lt; Prev</div>
      <div class="btn" @click="nextPage()">Next &gt;&gt;</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VehicleTable",
  methods: {
    nextPage() {
      this.$store.dispatch("getVehicle", {
        id: this.$route.params.id,
        page: "next",
      });
    },
  },
  computed: {
    keys() {
      return this.$store.state.keys;
    },
    data() {
      return this.$store.state.vehicle;
    },
  },
  mounted() {
    this.$store.dispatch("getVehicle", {
      id: this.$route.params.id,
      page: false,
    });
  },
};
</script>
