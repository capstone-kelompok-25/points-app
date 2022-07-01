<template>
  <div class="bg">
    <v-row class="mx-auto">
      <v-col>
        <v-card class="mx-auto" max-width="920px" elevation="0" color="#F0F4F9">
          <br />
          <v-card-text>
            <h4 class="ml-2">Nama Kamu</h4>
              <v-card-actions>
                <v-text-field
                  class="mr-3"
                  solo
                  dense
                  label="Masukkan nama Anda"
                ></v-text-field>
                <v-img
                  contain
                  src="/assets/icon/profile/Vector (1).png"  
                  max-width="21.34px">
                </v-img>
              </v-card-actions>
            <h4 class="ml-2">Email</h4>
              <v-card-actions>
                <v-text-field
                  class="mr-3"
                  solo
                  dense
                  label="Masukkan email Anda"
                ></v-text-field>
                <v-img
                  contain
                  src="/assets/icon/profile/Vector (1).png"  
                  max-width="21.34px">
                </v-img>
              </v-card-actions>
            <h4 class="ml-2">Nomor Handphone</h4>
              <v-card-actions>
                <v-text-field
                  class="mr-3"
                  solo
                  dense
                  label="Masukkan nomor handphone Anda"
                ></v-text-field>
                <v-img
                    contain
                    src="/assets/icon/profile/Vector (1).png"  
                    max-width="21.34px">
                </v-img>
              </v-card-actions>
          </v-card-text>
          <div class="d-flex justify-end mr-3">
            <v-btn width="168px" dark color="#3790FC"> Save </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ProfilePagePage",
  layout: 'user',
};
</script>

<style scoped>

</style>
