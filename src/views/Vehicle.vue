<template>
  <section class="section">
    <Header></Header>
    <Table></Table>
  </section>
</template>

<script>
import Header from "../components/vehicle/Header";
import Table from "../components/vehicle/Table";
export default {
  name: "Vehicle",
  components: {
    Header,
    Table,
  },
  data() {
    return {};
  },
};
</script>
