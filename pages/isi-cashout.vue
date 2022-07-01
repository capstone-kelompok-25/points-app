<template>
<div class="bg">
  <p class="ml-2">POINT.ID</p>
  <v-card color="#F0F4F9" width="900" class="mx-auto" elevation="0">
    <h3>Total Point Kamu</h3>
    <v-card height="60">
      <v-card-title>
        <v-img src="/assets/icon/emoney/Vector.png" max-width="30px" class="ml-1"></v-img>
        <h3 class="ml-1">1.234.000</h3> 
      </v-card-title>
    </v-card>
    <br>
    <h4>Nomor Rekening</h4>
    <v-text-field
      label="Masukan Nomor Rekening"
      singel-line
      solo
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
    <br>
    <v-row>
      <v-col v-for="(item, i) in nominal" :key="i" md="3">
        <v-card width="200" router link exact>
          <v-card-title> {{ item.harga }} </v-card-title>
          <v-card-title class="blue--text"> {{ item.poin }} </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-end">
      <v-col md="3">
        <v-btn dark block color="blue" shaped x-large @click="detailTransaction">
          NEXT
        </v-btn>
        <br>
      </v-col>
    </v-row>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'IsiCashoutPage',
  layout: 'user',
  data: () => ({
    items: ["BNI", "BRI", "BCA", "Mandiri"],
    value: null,
    nominal: [
      {
        harga: "Rp. 50.000",
        poin: "50.000 POIN",
      },
      {
        harga: "Rp. 100.000",
        poin: "100.000 POIN",
      },
      {
        harga: "Rp. 150.000",
        poin: "150.000 POIN",
      },
      {
        harga: "Rp. 200.000",
        poin: "200.000 POIN",
      },
      {
        harga: "Rp. 250.000",
        poin: "250.000 POIN",
      },
      {
        harga: "Rp. 300.000",
        poin: "300.000 POIN",
      },
      {
        harga: "Rp. 350.000",
        poin: "350.000 POIN",
      },
      {
        harga: "Rp. 400.000",
        poin: "400.000 POIN",
      },
    ],
  }),
  methods: {
    detailTransaction() {
      this.$router.push("/detail-transaction");
    },
  },
};
</script>

<style scoped>
p{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #3790FC;
}
</style>