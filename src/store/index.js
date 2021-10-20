import Vue from "vue";
import Vuex from "vuex";
import db from "../firebase/firebaseInit";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    vehicles: [],
    vehicle: [],
    keys: [],
    next: false,
    prev: false,
    limit: 10 
  },
  mutations: {
    setVehicles(state, payload) {
      state.vehicles = payload;
    },
    setVehicle(state, payload) {
      state.vehicle = payload;
    },
    setKeys(state, payload) {
      if(state.keys.length === 0) {
        const oby = Object.keys(payload);
        const keys = oby.filter(
          (item) => item !== "img" && item !== "Serial number"
        ).sort();
        state.keys = keys;
      }    
    },
    setNext(state, payload) {    
        state.next = payload;    
    },
    setPrev(state, payload) {
      state.prev = payload;
      if( state.page > 1) {
        state.page -= 1
      }
    },  
    setLimit(state, payload) {
      state.limit = payload;
    } 
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
     console.log(payload)
      const res = await db
        .collection("vhicles")
        .doc(payload.id)
        .collection("data")
        .orderBy("img")
        .startAfter(state.next)
        .limit(10)
        .get();

      const vehicle = res.docs;  
      const length = vehicle.length;
      const array = [];
      let next;
      for (let i = 0; i < length; i++) {
        array.push(vehicle[i].data());
      }
      if(length < payload.limit) {
          next = false
      }else{
        next = vehicle[length - 1]
      }
      commit("setNext",  next);
      commit("setVehicle", array);
      commit("setKeys", array[0]);
    },
  },
  setData() {

  },
  modules: {},
});
