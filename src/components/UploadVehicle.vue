<template>
  <div>
    sad
    <div v-if="loading">uloaded {{ current }} of {{ total }}</div>
    <input v-else type="file" @change="uploadFile($event)" />
  </div>
</template>

<script>
import db from "../firebase/firebaseInit";

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
        const result = JSON.parse(e.target.result);
        this.name = result[0]["Serial number"];
        this.data = result;
        this.addVhicles();
      };

      file.readAsText(files.item(0));
    },
    async addVhicles() {
      const response = await db.collection("vhicles").doc(this.name);
      if (!response.exists) {
        await response.set({
          data: "data",
        });
      }
      this.total = this.data.length;
      const img = "2.png";
      for (let i = 0; i < this.total; i++) {
        this.current = i;
        const key = new Date(this.data[i]["Date/Time"]).getTime().toString();
        const subcollection = response.collection("data").doc(key);

        await subcollection.set({
          ...this.data[i],
          img: img,
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
