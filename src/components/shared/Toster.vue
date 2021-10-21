<template>
    <div class="toster" :class="{error: toster.error}">
        <p class="toster__text">{{toster.msg}}</p>
    </div>
</template>
<script>
export default {
    name: "toster",
    computed: {
        toster() {
            return this.$store.state.utils.toster;
        }
    },
    mounted() {
        setTimeout(() => {
             this.$store.commit("utils/setToster", 
                {error : false, msg: ""});
        }, 3000);
    }
};

</script>
