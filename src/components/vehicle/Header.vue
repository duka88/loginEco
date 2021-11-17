<template>
  <div class="vehicle__header">
    <div class="vehicle__wrap">
      <div v-if="link" @click="$router.go(-1)" class="btn">&lt;&lt; Back</div>
      <h1 class="page-title">{{ title }}</h1>
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
    link: { type: Boolean, required: true },
  },
}
</script>
