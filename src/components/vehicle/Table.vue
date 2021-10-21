<template>
  <div class="vehicle-table">
    <select v-model="limit" @change="setLimit()">
      <option value="2">10</option>
      <option value="2">20</option>
      <option value="5">50</option>
      <option value="10">100</option>
    </select>
    <div class="vehicle-table__wrap">
      <table class="vehicle-table__table">
        <thead>
          <tr>
            <th class="vehicle-table__head">
              Actions
            </th>
            <th class="vehicle-table__head" v-for="key in keys" :key="key">
              {{ key }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item['Date/Time']">
            <td class="vehicle-table__cell">
              <span @click="setEdit(item)" class="vehicle-table__edit"
                >edit</span
              >
            </td>
            <td class="vehicle-table__cell" v-for="key in keys" :key="key">
              {{ item[key] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="vehicle-table__pagination">
      <div
        class="btn"
        :class="{ 'btn--inactive': $route.query.page < 2 }"
        @click="prevPage()"
      >
        &lt;&lt; Prev
      </div>
      <div class="btn" :class="{ 'btn--inactive': !next }" @click="nextPage()">
        Next &gt;&gt;
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VehicleTable",
  data() {
    return {
      prev: false,
      limit: this.$route.query.perPage,
    };
  },
  methods: {
    nextPage() {
      if (this.next) {
        this.prev = false;
        this.$router.push({
          query: {
            id: this.$route.query.id,
            page: +this.$route.query.page + 1,
            perPage: this.$route.query.perPage,
          },
        });
      }
    },
    prevPage() {
      if (this.$route.query.page > 1) {
        this.prev = true;
        this.$router.push({
          query: {
            id: this.$route.query.id,
            page: +this.$route.query.page - 1,
            perPage: this.$route.query.perPage,
          },
        });
      }
    },
    setLimit() {
      this.$router.push({
        query: {
          id: this.$route.query.id,
          page: this.$route.query.page,
          perPage: this.limit,
        },
      });
    },
    getVehicle() {
      this.$store.dispatch("vehicles/getVehicle", {
        id: this.$route.query.id,
        prev: this.prev,
        limit: this.$route.query.perPage,
      });
    },
    checkPage() {
      if (!this.next) {
        this.$store.dispatch("vehicles/getPage", {
          id: this.$route.query.id,
          prev: this.prev,
          limit: this.$route.query.perPage,
        });
      } else {
        this.getVehicle();
      }
    },
    setEdit(item) {
      this.$store.commit("vehicles/setEditVehicle", item);
      const date = item["Date/Time"].replaceAll(" ", "_").replaceAll(":", "-");
      this.$router.push({
        name: "edit-vehicle",
        query: {
          id: item["Serial number"],
          date: date,
        },
      });
    },
  },
  computed: {
    keys() {
      return this.$store.state.vehicles.keys;
    },
    next() {
      return this.$store.state.vehicles.next;
    },
    data() {
      return this.$store.state.vehicles.vehicle;
    },
  },
  watch: {
    "$route.query.page"() {
      this.getVehicle();
    },
    "$route.query.perPage"() {
      this.getVehicle();
    },
  },
  mounted() {
    this.getVehicle();
  },
};
</script>
