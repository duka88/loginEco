<template>
  <div class="vehicle__header">
    <div class="vehicle__wrap">
      <router-link v-if="link" :to="link" class="btn"
        >&lt;&lt; Back
      </router-link>
      <h1 class="page-title"><span>Sr No.</span> {{ title }}</h1>
      <p v-if="subtitle" class="page-subtitle">
        Date: <strong>{{ subtitle }}</strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VehicleHeader",
  props: ["title", "subtitle", "link"],
};
</script>
