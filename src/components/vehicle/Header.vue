<template>
  <div class="vehicle__header">
    <div class="vehicle__wrap">
      <router-link to="/" class="btn">&lt;&lt; Back </router-link>
      <h1 class="page-title"><span>Sr No.</span> {{ $route.params.id }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "VehicleHeader",
};
</script>
