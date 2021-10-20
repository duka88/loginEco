<template>
  <form class="form">
    <div class="form__wrap">
      <div class="form__row form__row--50">
        <label for="AcStat">Actual status of creeper</label>
        <input
          v-model="form.AcStat.value"
          type="text"
          :class="{ error: form.AcStat.error }"
        />
        <span v-if="form.AcStat.error" class="form__error">
          {{ form.AcStat.error }}
        </span>
      </div>
      <div class="form__row form__row--50">
        <label for="AllWheel">All-wheel drive status</label>
        <select
          v-model="form.AllWheel.value"
          :class="{ error: form.AllWheel.error }"
        >
          <option value="Automatic">"Automatic"</option>
          <option value="Manual">"Manual"</option>
        </select>
        <span v-if="form.AllWheel.error" class="form__error">
          {{ form.AllWheel.error }}
        </span>
      </div>
      <div class="form__row form__row--50">
        <label for="AmTemp">Ambient temperature</label>
        <input
          v-model="form.AmTemp.value"
          type="number"
          :class="{ error: form.AmTemp.error }"
        />
        <span v-if="form.AmTemp.error" class="form__error">
          {{ form.AmTemp.error }}
        </span>
      </div>
      <div class="form__row form__row--50">
        <label for="CoolTemp">Coolant temperature</label>
        <input
          v-model="form.CoolTemp.value"
          type="number"
          :class="{ error: form.CoolTemp.error }"
        />
        <span v-if="form.CoolTemp.error" class="form__error">
          {{ form.CoolTemp.error }}
        </span>
      </div>
      <div class="form__row form__row--50">
        <label for="CoolTemp">Engine load</label>
        <input
          v-model="form.EngLoad.value"
          type="number"
          :class="{ error: form.EngLoad.error }"
        />
        <span v-if="form.EngLoad.error" class="form__error">
          {{ form.EngLoad.error }}
        </span>
      </div>
      <div class="form__row form__row--50">
        <label for="CoolTemp">Engine speed</label>
        <input
          v-model="form.EngSpeed.value"
          type="number"
          :class="{ error: form.EngSpeed.error }"
        />
        <span v-if="form.EngSpeed.error" class="form__error">
          {{ form.EngSpeed.error }}
        </span>
      </div>
      <div class="form__row form__row--50">
        <label for="CoolTemp">Fuel consumption</label>
        <input
          v-model="form.FuelCon.value"
          type="text"
          :class="{ error: form.FuelCon.error }"
        />
        <span v-if="form.FuelCon.error" class="form__error">
          {{ form.FuelCon.error }}
        </span>
      </div>
      <div class="form__row form__row--50">
        <label for="CoolTemp">GPS latitude</label>
        <input
          v-model="form.Lat.value"
          type="text"
          :class="{ error: form.Lat.error }"
        />
        <span v-if="form.Lat.error" class="form__error">
          {{ form.Lat.error }}
        </span>
      </div>
      <div class="form__row form__row--50">
        <label for="CoolTemp">GPS longitude</label>
        <input
          v-model="form.Lng.value"
          type="number"
          :class="{ error: form.Lng.error }"
        />
        <span v-if="form.Lng.error" class="form__error">
          {{ form.Lng.error }}
        </span>
      </div>
      <div class="form__row form__row--50">
        <label for="CoolTemp">Ground speed gearbox </label>
        <input
          v-model="form.GroundSpeedGear.value"
          type="number"
          :class="{ error: form.GroundSpeedGear.error }"
        />
        <span v-if="form.GroundSpeedGear.error" class="form__error">
          {{ form.GroundSpeedGear.error }}
        </span>
      </div>
      <div class="form__row form__row--50">
        <label for="CoolTemp">Ground speed radar</label>
        <input
          v-model="form.GroundSpeedRadar.value"
          type="number"
          :class="{ error: form.GroundSpeedRadar.error }"
        />
        <span v-if="form.GroundSpeedRadar.error" class="form__error">
          {{ form.GroundSpeedRadar.error }}
        </span>
      </div>
      <div class="form__row form__row--50">
        <label for="CoolTemp">Speed front PTO</label>
        <input
          v-model="form.SpeedFront.value"
          type="number"
          :class="{ error: form.SpeedFront.error }"
        />
        <span v-if="form.SpeedFront.error" class="form__error">
          {{ form.SpeedFront.error }}
        </span>
      </div>
      <div class="form__row form__row--50">
        <label for="CoolTemp">Total working hours counter</label>
        <input
          v-model="form.TotHours.value"
          type="number"
          :class="{ error: form.TotHours.error }"
        />
        <span v-if="form.TotHours.error" class="form__error">
          {{ form.TotHours.error }}
        </span>
      </div>
      <div class="form__row form__row--50">
        <label for="CoolTemp">Transverse differential lock status</label>
        <input
          v-model="form.TransDiff.value"
          type="number"
          :class="{ error: form.TransDiff.error }"
        />
        <span v-if="form.TransDiff.error" class="form__error">
          {{ form.TransDiff.error }}
        </span>
      </div>
      <div class="form__row form__row--50">
        <label for="CoolTemp">Current gear shift</label>
        <input
          v-model="form.CurrGear.value"
          type="number"
          :class="{ error: form.CurrGear.error }"
        />
        <span v-if="form.CurrGear.error" class="form__error">
          {{ form.CurrGear.error }}
        </span>
      </div>
    </div>
    <div v-if="loading" class="loader"></div>
    <div v-else @click="submit()" class="btn">UPTATE</div>
  </form>
</template>
<script>
import db from "../../firebase/firebaseInit";
export default {
  name: "EditForm",
  props: ["vehicle"],
  data() {
    return {
      form: {
        AcStat: {
          value: "",
          error: false,
        },
        AllWheel: {
          value: "",
          error: false,
        },
        AmTemp: {
          value: "",
          error: false,
          val: {
            required: true,
            min: -50,
            max: 2000,
          },
        },
        CoolTemp: {
          value: "",
          error: false,
          val: {
            required: true,
            min: -50,
            max: 2000,
          },
        },
        EngLoad: {
          value: "",
          error: false,
          val: {
            required: true,
          },
        },
        EngSpeed: {
          value: "",
          error: false,
          val: {
            required: true,
            min: 0,
            max: 5000,
          },
        },
        FuelCon: {
          value: "",
          error: false,
        },
        Lat: {
          value: "",
          error: false,
          val: {
            required: true,
          },
        },
        Lng: {
          value: "",
          error: false,
          val: {
            required: true,
          },
        },
        GroundSpeedGear: {
          value: "",
          error: false,
        },
        GroundSpeedRadar: {
          value: "",
          error: false,
        },
        SpeedFront: {
          value: "",
          error: false,
        },
        TotHours: {
          value: "",
          error: false,
        },
        TransDiff: {
          value: "",
          error: false,
        },
        CurrGear: {
          value: "",
          error: false,
        },
      },
      error: false,
      loading: false,
    };
  },
  methods: {
    async submit() {
      this.clearErrors();
      this.validation();
      if (this.error) {
        return;
      }
      if (!this.loading) {
        const decode = this.$route.query.date
          .replaceAll("_", " ")
          .replaceAll("-", ":");

        const date = new Date(decode).getTime().toString();
        console.log({ ...this.setData() });
        await db
          .collection("vhicles")
          .doc(this.$route.query.date)
          .collection("data")
          .doc(date)
          .update({ ...this.setData() });
      }
    },
    validation() {
      const inputs = Object.keys(this.form);

      inputs.forEach((item) => {
        const val = this.form[item].val;
        const value = this.form[item].value;
        if (val) {
          if (val.required && !value) {
            this.form[item].error = "this field is required";
            this.error = true;
          }
          if (val.min > value) {
            this.form[item].error = `value must be bigger then ${val.min}`;
            this.error = true;
          }
          if (val.max < value) {
            this.form[item].error = `value can't be bigger then ${val.max}`;
            this.error = true;
          }
        }
      });
      this.$nextTick(() => {
        const error = document.querySelector(".error");
        console.log(error);
        if (error) {
          const el = error.getBoundingClientRect().top + 50;
          window.scrollTo({ top: el, behavior: "smooth" });
        }
      });
    },
    clearErrors() {
      const inputs = Object.keys(this.form);
      inputs.forEach((item) => {
        this.form[item].error = "";
        this.error = false;
      });
    },
    setForm() {
      this.form.AcStat.value = this.vehicle["Actual status of creeper []"];
      this.form.AllWheel.value = this.vehicle["All-wheel drive status []"];
      this.form.AmTemp.value = this.vehicle["Ambient temperature [°C]"];
      this.form.CoolTemp.value = this.vehicle["Coolant temperature [°C]"];
      this.form.EngLoad.value = this.vehicle["Engine load [%]"];
      this.form.EngSpeed.value = this.vehicle["Engine speed [rpm]"];
      this.form.FuelCon.value = this.vehicle["Fuel consumption [l/h]"];
      this.form.Lat.value = this.vehicle["GPS latitude [°]"];
      this.form.Lng.value = this.vehicle["GPS longitude [°]"];
      this.form.GroundSpeedGear.value = this.vehicle[
        "Ground speed gearbox [km/h]"
      ];
      this.form.GroundSpeedRadar.value = this.vehicle[
        "Ground speed radar [km/h]"
      ];
      this.form.SpeedFront.value = this.vehicle["Speed front PTO [rpm]"];
      this.form.TransDiff.value = this.vehicle[
        "Transverse differential lock status []"
      ];
      this.form.CurrGear.value = this.vehicle["CurrGear"];
    },
    setData() {
      const data = {
        "Actual status of creeper []": this.form.AcStat.value,
        "All-wheel drive status []": this.form.AllWheel.value,
        "Ambient temperature [°C]": this.form.AmTemp.value,
        "Coolant temperature [°C]": this.form.CoolTemp.value,
        "Engine load [%]": this.form.EngLoad.value,
        "Engine speed [rpm]": this.form.EngSpeed.value,
        "Fuel consumption [l/h]": this.form.FuelCon.value,
        "GPS latitude [°]": this.form.Lat.value,
        "GPS longitude [°]": this.form.Lng.value,
        "Ground speed gearbox [km/h]": this.form.GroundSpeedGear.value,
        "Ground speed radar [km/h]": this.form.GroundSpeedRadar.value,
        "Speed front PTO [rpm]": this.form.SpeedFront.value,
        "Transverse differential lock status []": this.form.TransDiff.value,
        CurrGear: this.form.CurrGear.value,
      };

      return data;
    },
  },

  mounted() {
    this.setForm();
  },
};
</script>
