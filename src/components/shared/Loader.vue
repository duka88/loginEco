<template>
  <div class="loader__wrap" >
    <div class="loader"></div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex"
export default {
  name: "loader",
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