<template>
  <div class="toster" :class="{ error: toster.error }">
    <p class="toster__text">{{ toster.msg }}</p>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex"
export default {
  name: "toster",
  computed: {
    ...mapState("utils", ["toster"]),
  },
  methods: {
    ...mapActions("utils", ["triggerToster"]),
  },
  mounted() {
    setTimeout(() => {  
      this.triggerToster({ error: false, msg: "" })
    }, 3000)
  },
}
</script>
