<template>
  <div class="form__confirm">
    <h3 class="main-title">Are you sure?</h3>
    <div class="form__btn-wrap">
      <div @click="$emit('submit')" class="btn btn--red">Proceed</div>
      <div @click="$emit('confirmed')" class="btn">Cancel</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ConfirmPopup",
}
</script>
