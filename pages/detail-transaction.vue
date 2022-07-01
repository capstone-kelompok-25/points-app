<template>
  <div class="bg">
    <br>
    <h2 class="text-center mx-auto">Your Detail Transaction</h2>
    <v-card elevation="0" width="400" class="mx-auto" color="#F0F4F9">
      <v-card width="400" class="mx-auto">
        <br /><br />
        <v-card width="280" class="mx-auto" elevation="0">
          <v-card-title>Jack Brown</v-card-title>
          <v-card-title class="blue--text">Transaksi Berlangsung</v-card-title>
          <v-card-text>
            <span>TELKOMSEL - Paket Data</span><br />
            <span>Paket Internet - 0812xxxxxx</span><br />
            <span>15 GB</span>
          </v-card-text>
          <v-card-title class="blue--text">POIN</v-card-title>
          <v-card-text>
            <span>Poin anda: 534.000</span><br />
            <span>Poin yang akan Ditukar: 15.500</span><br />
            <span>Sisa POIN: 519.000</span>
          </v-card-text>
        </v-card>
        <br /><br /><br />
      </v-card>
      <br>
      <v-row class="d-flex justify-end">
        <v-col md="4">
          <v-btn dark block color="blue" shaped x-large @click="paymentPIN"> NEXT </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'DetailTransactionPage',
  layout: 'user',
  methods: {
    paymentPIN() {
      this.$router.push("/confirmation-pin");
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