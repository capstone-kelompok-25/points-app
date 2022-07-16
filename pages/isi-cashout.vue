<template>
  <div class="bg">
    <p class="ml-2"><a href="/" style="text-decoration: none"> POINT.ID</a></p>
    <v-card color="#F0F4F9" width="900" class="mx-auto" elevation="0">
      <h3>Total Point Kamu</h3>
      <v-card height="60">
        <v-card-title>
          <v-img
            src="/assets/icon/emoney/Vector.png"
            max-width="30px"
            class="ml-1"
          ></v-img>
          <h3 class="ml-1">{{ totalPoint }}</h3>
        </v-card-title>
      </v-card>
      <br />
      <h4>Nomor Rekening</h4>
      <v-text-field
        label="Masukan Nomor Rekening"
        singel-line
        solo
        v-model="bankNumber"
        type="text"
        :rules="numberRules"
      ></v-text-field>
      <h4>Pilih BANK</h4>
      <v-row>
        <v-col md="3">
          <v-autocomplete
            v-model="value"
            :items="items"
            solo
            label="Pilih Bank"
          ></v-autocomplete>
        </v-col>
      </v-row>
      <h4>Nominal</h4>
      <br />
      <v-row>
        <v-col v-for="(item, i) in nominal" :key="i" md="3">
          <v-card
            width="200"
            v-model="item.value"
            @click="getPointSelected(item.value)"
            router
            link
            exact
          >
            <v-card-title>
              {{ item.harga }}
            </v-card-title>
            <v-card-title class="blue--text"> {{ item.poin }} </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-end">
        <v-col md="3">
          <v-btn
            style="color: white"
            block
            color="blue"
            shaped
            x-large
            @click="save"
            :disabled="!validationForm"
          >
            Lanjut
          </v-btn>
          <br />
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "IsiCashoutPage",
  layout: "user",
  middleware: ["auth"],
  data: () => ({
    items: ["BNI", "BRI", "BCA", "Mandiri"],
    value: null,
    bankNumber: "",
    poinSelected: null,

    numberRules: [
      (v) => v.length > 0 || "required",
      (v) => Number.isInteger(Number(v)) || "harus angka",
      (v) => v > 0 || "format salah",
    ],

    nominal: [
      {
        harga: "Rp. 50.000",
        poin: "50.000 POIN",
        value: 50000,
      },
      {
        harga: "Rp. 100.000",
        poin: "100.000 POIN",
        value: 100000,
      },
      {
        harga: "Rp. 150.000",
        poin: "150.000 POIN",
        value: 150000,
      },
      {
        harga: "Rp. 200.000",
        poin: "200.000 POIN",
        value: 200000,
      },
      {
        harga: "Rp. 250.000",
        poin: "250.000 POIN",
        value: 250000,
      },
      {
        harga: "Rp. 300.000",
        poin: "300.000 POIN",
        value: 300000,
      },
      {
        harga: "Rp. 350.000",
        poin: "350.000 POIN",
        value: 350000,
      },
      {
        harga: "Rp. 400.000",
        poin: "400.000 POIN",
        value: 400000,
      },
    ],
  }),
  methods: {
    save() {
      this.$store.dispatch("Transaction/fetchDataCashout", {
        customer_id: this.$cookies.get("userData").id,
        bank_provider: this.value,
        nomor: this.bankNumber,
        an_rekening: this.$cookies.get("userData").fullname,
        amount: this.poinSelected,
        poin_account: this.$cookies.get("userData").poin,
        poin_redeem: this.poinSelected,
      });

      this.$router.push("/cashout/detail-transaction");
    },

    getPointSelected(value) {
      this.poinSelected = value;
      console.log(this.poinSelected);
    },
  },
  computed: {
    totalPoint() {
      return this.$cookies.get("userData").poin;
    },
    validationForm() {
      if (
        this.bankNumber !== "" &&
        this.value !== null &&
        this.poinSelected !== null
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #3790fc;
}
</style>