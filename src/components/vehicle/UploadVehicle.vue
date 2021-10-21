<template>
  <div class="upload">
    <div v-if="loading" class="upload__text">
      <p class="text">
        uloaded <b>{{ current }}</b> of <b>{{ total }}</b>
      </p>
    </div>
    <label v-else for="file">
      <div class="btn">Add Vehicle</div>
      <input
        type="file"
        id="file"
        name="file"
        @change="uploadFile($event)"
        style="display: none"
      />
    </label>
  </div>
</template>

<script>
import db from "../../firebase/firebaseInit";

export default {
  name: "upload-vhicle",
  data() {
    return {
      loading: false,
      current: 0,
      total: 0,
      name: "",
      data: [],
    };
  },
  methods: {
    uploadFile(e) {
      const files = e.target.files;
      const file = new FileReader();

      file.onload = (e) => {
        this.loading = true;

        const result = e.target.result;
        const lines = result.split("\n");
        const keys = lines[0].split(";");
        const array = [];

        lines.forEach((item, index) => {
          if (index !== 0) {
            const values = item.split(";");
            const pair = {};
            values.forEach((item, index) => {
              pair[keys[index]] = item;
            });
            array.push(pair);
          }
        });
        this.name = array[0]["Serial number"];
        this.data = array;
        this.addVhicles();
      };

      file.readAsText(files.item(0));
    },
    async addVhicles() {
      try {
        const response = await db.collection("vhicles").doc(this.name);
        if (!response.exists) {
          await response.set({
            data: "data",
          });
        }
        this.total = this.data.length;
        const img = this.getRandomNum() + ".png";
        for (let i = 0; i < this.total; i++) {
          this.current = i;
          const key = new Date(this.data[i]["Date/Time"]).getTime().toString();
          const subcollection = response.collection("data").doc(key);

          await subcollection.set({
            ...this.data[i],
            img: img,
          });
        }
        this.$store.commit("utils/setToster", {
          error: false,
          msg: "vehicle uploaded successfully",
        });
      } catch (error) {
        this.$store.commit("utils/setToster", {
          error: true,
          msg: "something went wrong contact support",
        });
      }
      this.loading = false;
    },

    getRandomNum() {
      return Math.floor(Math.random() * 3);
    },
  },
  mounted() {},
};
</script>
