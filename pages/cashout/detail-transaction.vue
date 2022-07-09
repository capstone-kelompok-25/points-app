<template>
  <div class="bg">
    <br />
    <h2 class="text-center mx-auto">Your Detail Transaction</h2>
    <v-card elevation="0" width="400" class="mx-auto" color="#F0F4F9">
      <v-card width="400" class="mx-auto">
        <br /><br />
        <v-card width="280" class="mx-auto" elevation="0">
          <v-card-title>{{ cashoutTransaction.an_rekening }}</v-card-title>
          <v-card-title class="blue--text">Transaksi Berlangsung</v-card-title>
          <v-card-text>
            <span>
              <v-row>
                <v-col> Nomor Rekening </v-col>
                <v-col cols="4">
                  {{ cashoutTransaction.nomor }}
                </v-col>
              </v-row></span
            ><br />
            <span>
              <v-row>
                <v-col cols="8"> Bank </v-col>
                <v-col cols="4">
                  {{ cashoutTransaction.bank_provider }}
                </v-col>
              </v-row> </span
            ><br />
          </v-card-text>
          <v-card-title class="blue--text">POIN</v-card-title>
          <v-card-text>
            <span>Poin anda: {{ cashoutTransaction.poin_account }}</span
            ><br />
            <span
              >Poin yang akan Ditukar:
              {{ cashoutTransaction.poin_redeem }}</span
            ><br />
            <span>amount POIN: {{ cashoutTransaction.amount }}</span>
          </v-card-text>
        </v-card>
        <br /><br /><br />
      </v-card>
      <br />
      <v-row class="d-flex justify-end">
        <v-col md="4">
          <v-btn dark block color="blue" shaped x-large @click="paymentPIN">
            NEXT
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "DetailTransactionCashout",
  layout: "user",
  methods: {
    paymentPIN() {
      this.$router.push("/cashout/confirm");
    },
  },
  computed: {
    cashoutTransaction() {
      return this.$store.state.Transaction.cashoutTransaction;
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