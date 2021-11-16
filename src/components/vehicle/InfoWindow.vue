<template>
  <div class="info-window">
    <p>
      Date/Time: <strong>{{ info.date }}</strong>
    </p>
    <p>
      Engine speed [rpm]: <strong>{{ info.speed }}</strong>
    </p>
    <p>
      Fuel consumption [l/h: <strong>{{ info.fuel }}</strong>
    </p>
    <p>
      Coolant temperature [°C] : <strong>{{ info.colTemp }}</strong>
    </p>
    <p>
      Ambient temperature [°C]: <strong>{{ info.ambTemp }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: "InfoWindow",
  props: { info: { type: Object, required: true } },
}
</script>
