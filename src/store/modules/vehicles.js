import db from "../../firebase/firebaseInit"

const state = {
  vehicles: [],
  vehicle: [],
  editVehicle: {},
  keys: [
    "Date/Time",
    "Serial number",   
    "GPS longitude [°]",  
    "GPS latitude [°]",
    "Total working hours counter [h]",
    "Engine speed [rpm]",
    "Engine load [%]",
    "Fuel consumption [l/h]",
    "Ground speed gearbox [km/h]",
    "Ground speed radar [km/h]",
    "Coolant temperature [°C]",
    "Speed front PTO [rpm]",
    "Speed rear PTO [rpm]",
    "current gear shift []",
    "Ambient temperature [°C]",
    "Parking brake status []",
    "Transverse differential lock status []",
    "All-wheel drive status []",
    "Actual status of creeper []",
  ],
  next: false,
  id: 0,
  prev: false,
}
const mutations = {
  setVehicles(state, payload) {
    state.vehicles = payload
  },
  setVehicle(state, payload) {
    state.vehicle = payload
  },
  setEditVehicle(state, payload) {
    state.editVehicle = payload
  },
  setNext(state, payload) {
    state.next = payload
  },
  setPrev(state, payload) {
    state.prev = payload
  },
}
const actions = {
  async getVehicles({ commit, dispatch }) {
    try {
      const res = await db.collection("vhicles").get()
      const vehicles = res.docs
      const array = []

      for (let i = 0; i < vehicles.length; i++) {
        const res = await db
          .collection("vhicles")
          .doc(vehicles[i].id)
          .collection("data")
          .limit(1)
          .get()

        array.push(res.docs[0].data())
      }
      commit("setVehicles", array)
    } catch (error) {
      dispatch(
        "utils/triggerToster",
        {
          error: true,
          msg: "something went wrong contact support",
        },
        {
          root: true,
        }
      )
    }
  },
  async getVehicle({ dispatch, commit, state }, payload) {
    let page
    try {
      const query = db
        .collection("vhicles")
        .doc(payload.id)
        .collection("data")
        .orderBy("img")

      if (!payload.prev) {
        page = query.startAfter(state.next).limit(payload.limit)
      } else {
        page = query.endBefore(state.prev).limitToLast(payload.limit)
      }

      const res = await page.get()

      const vehicle = res.docs
      const length = vehicle.length
      const array = []
      let next
      for (let i = 0; i < length; i++) {
        array.push(vehicle[i].data())
      }
      if (length < payload.limit) {
        next = false
      } else {
        next = vehicle[length - 1]
      }

      commit("setNext", next)
      commit("setPrev", vehicle[0])
      commit("setVehicle", array)  
      dispatch("setPage", { id: payload.id, last: vehicle[length - 1]?.id })
    } catch (error) {
      console.log(error)
      dispatch(
        "utils/triggerToster",
        {
          error: true,
          msg: "something went wrong contact support",
        },
        {
          root: true,
        }
      )
    }
  },
  async setEdit({ commit, dispatch }, payload) {
    try {
      const vehicle = await db
        .collection("vhicles")
        .doc(payload.id)
        .collection("data")
        .doc(payload.date)
        .get()
      commit("setEditVehicle", vehicle.data())
    } catch (error) {
      dispatch(
        "utils/triggerToster",
        {
          error: true,
          msg: "something went wrong contact support",
        },
        {
          root: true,
        }
      )
    }
  },

  async setPage({ dispatch }, payload) {
    try {
      const data = {
        id: payload.id,
      }
      payload.last ? (data.page = payload.last) : 0
      const base = db.collection("paging").doc("next")
      await base.set(data)
    } catch (error) {
      dispatch(
        "utils/triggerToster",
        {
          error: true,
          msg: "something went wrong contact support",
        },
        {
          root: true,
        }
      )
    }
  },

  async getPage({ dispatch, commit }, payload) {
    try {
      const res = await db.collection("paging").get()
      const page = await res.docs[0].data().page

      const next = await db
        .collection("vhicles")
        .doc(payload.id)
        .collection("data")
        .doc(page)
        .get()
      commit("setNext", next)
      dispatch("getVehicle", {
        id: payload.id,
        prev: false,
        limit: payload.limit,
      })
    } catch (error) {
      dispatch(
        "utils/triggerToster",
        {
          error: true,
          msg: "something went wrong contact support",
        },
        {
          root: true,
        }
      )
    }
  },
  setEditVehicle({ commit }, payload) {
    commit("setEditVehicle", payload)
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
