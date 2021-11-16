<template>
  <div class="vehicle-list">
    <h1 class="page-title">Vehicles List</h1>

    <div class="vehicle-list__wrap">
      <article
        v-for="vehicle in vehicles"
        :key="vehicle['Serial number']"
        class="vehicle-list__single"
      >
        <router-link
          :to="{
            name: 'vehicle',
            query: { id: vehicle['Serial number'], page: 1, perPage: 20 },
          }"
        >
          <div class="vehicle-list__single-wrap">
            <figure class="vehicle-list__img">
              <img
                :src="require(`../../assets/img/${vehicle['img']}`)"
                alt=""
              />
            </figure>
            <div class="vehicle-list__body">
              <h3 class="section-title">{{ vehicle["Serial number"] }}</h3>
              <p class="text">
                Total working hours
                <strong
                  >{{ vehicle["Total working hours counter [h]"] }} h</strong
                >
              </p>
            </div>
          </div>
        </router-link>
      </article>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "Vehicle",
  computed: {
    ...mapState("vehicles", ["vehicles"]),
  },
}
</script>
