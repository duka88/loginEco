import Vue from "vue";
import Vuex from "vuex";
import db from "../firebase/firebaseInit";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    vehicles: [],
    vehicle: [],
    keys: [],
    next: 0,
    prev: false,
  },
  mutations: {
    setVehicles(state, payload) {
      state.vehicles = payload;
    },
    setVehicle(state, payload) {
      state.vehicle = payload;
    },
    setKeys(state, payload) {
      const oby = Object.keys(payload);
      const keys = oby.filter(
        (item) => item !== "img" && item !== "Serial number"
      );
      state.keys = keys;
    },
    setNext(state, payload) {
      state.next = payload;
    },
    setPrev(state, payload) {
      state.prev = payload;
    },
  },
  actions: {
    async getVehicles({ commit }) {
      const res = await db.collection("vhicles").get();
      const vehicles = res.docs;
      const array = [];
      for (let i = 0; i < vehicles.length; i++) {
        const res = await db
          .collection("vhicles")
          .doc(vehicles[i].id)
          .collection("data")
          .limit(1)
          .get();
        array.push(res.docs[0].data());
      }
      commit("setVehicles", array);
    },
    async getVehicle({ commit, state }, payload) {
      const res = await db
        .collection("vhicles")
        .doc(payload.id)
        .collection("data")
        .orderBy("img")
        .startAfter(state.next)
        .limit(10)
        .get();

      const vehicle = res.docs;
      console.log(vehicle[vehicle.length - 1]);
      console.log(vehicle, vehicle.length);
      const array = [];
      for (let i = 0; i < vehicle.length; i++) {
        array.push(vehicle[i].data());
      }
      commit("setNext", vehicle[vehicle.length - 1]);
      commit("setVehicle", array);
      commit("setKeys", array[0]);
    },
  },
  modules: {},
});
