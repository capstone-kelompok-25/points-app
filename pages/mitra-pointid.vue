<template>
  <div class="bg">
    <p class="ml-2">POINT.ID</p>
    <v-row v-for="(item,i) in items" :key="i">
        <v-col >
            <v-card
            color="#F0F4F9"
            class="mx-auto"
            elevation="0"
            max-width="700px"
            >
            <v-row>
                <v-col md="3">
                <v-img :src="item.img"></v-img>
                </v-col>
                <v-col md="9">
                    <v-card-title>
                    {{item.title}}
                    </v-card-title>
                    <v-card-subtitle>
                        {{item.alamat}}
                    </v-card-subtitle>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            </v-card>
        </v-col>
    </v-row>
    <br><br>
  </div>
</template>

<script>
export default {
    name: 'MitraPointidPage',
    layout: 'user',
    data(){
        return {
            items: [
            {
                img: "../assets/icon/mitra/Rectangle 295.png",
                title: "PT.Mugi Rekso Abadi",
                alamat: "Plaza Permata, JL. M.H Thamrin No.57, RT.9/RW.5, Gondangdia Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350",
            },
            {
                img: "../assets/icon/mitra/Rectangle 295 (1).png",
                title: "PT.Kreasi Persada Grafika",
                alamat: "RMH4+QV4, Jl. Supardi, RT.003/RW.003, Tanah tinggi, Kec. Tangerang, Kota Tangerang, Banten, 15119",
            },
            {
                img: "../assets/icon/mitra/Rectangle 295 (2).png",
                title: "PT.Indomarco Prismatama",
                alamat: "Kawasan Industri Bukit Tinggi Indah Sektor N Blok B 1 No.5, Dangdeur, Bungursari, Dangdeur, Kec.Bungursari, Kabupaten Purwakarta, Jawa Barat 41181",
            },
            ],
        }
    },
    methods: {

    }

}
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