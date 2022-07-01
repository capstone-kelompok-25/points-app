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
    <h4>Nomor Ponsel</h4>
    <v-text-field
      label="Masukan Nomor Ponsel Anda"
      singel-line
      solo
    ></v-text-field>
    <h4>Pilih Provider</h4>
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
    <v-row>
      <v-col md="6">
        <v-btn block text @click="pulsashow">Pulsa</v-btn>
      </v-col>
      <v-col md="6">
        <v-btn block text @click="paketshow">Paket Data</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row v-if="show1">
          <v-col v-for="(item, i) in pulsa" :key="i" md="6">
            <v-card width="200" router link exact>
              <v-card-title> {{ item.harga }} </v-card-title>
              <v-card-title> {{ item.poin }} </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row v-if="show2">
          <v-col v-for="(item, i) in paket" :key="i">
            <v-card width="435" router link exact>
              <v-card-title>
                {{ item.internet }}
                <v-spacer></v-spacer>
                <a class="blue--text">Lihat Detail</a>
              </v-card-title>
              <v-card-text>
                <span>{{ item.kuota }}</span
                ><br />
                <span>{{ item.poin }}</span>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
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
  name: 'IsiPaketPulsaPage',
  layout: 'user',
  data: () => ({
    items: ["Telkomsel", "Axis", "Indosat", "Three"],
    value: null,
    show1: true,
    show2: false,
    pulsa: [
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
    paket: [
      {
        internet: "Internet",
        kuota: "15 GB",
        poin: "15.000 POIN",
      },
      {
        internet: "Internet",
        kuota: "20 GB",
        poin: "20.000 POIN",
      },
      {
        internet: "Internet",
        kuota: "25 GB",
        poin: "25.000 POIN",
      },
      {
        internet: "Internet",
        kuota: "30 GB",
        poin: "35.000 POIN",
      },
    ],
  }),
  methods: {
    pulsashow() {
      (this.show1 = true), (this.show2 = false);
    },
    paketshow() {
      (this.show1 = false), (this.show2 = true);
    },
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