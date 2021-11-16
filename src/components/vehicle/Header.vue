<template>
  <div class="vehicle__header">
    <div class="vehicle__wrap">
      <div @click="$router.go(-1)" class="btn">&lt;&lt; Back</div>
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
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: false },
    link: { type: String, required: false },
  },
}
</script>
