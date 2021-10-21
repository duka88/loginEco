import Vue from "vue";
import Vuex from "vuex";
import vehicles from "./modules/vehicles";
import utils from "./modules/utils";
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC3Pep87jmCbuirH_G2_Ftd0f5A08cUYpw'  
  } 
})
Vue.use(Vuex);

export default new Vuex.Store({
 
  modules: {
    vehicles,
    utils
  },
});
