<template>
  <div class="bg">
    <p class="ml-2"><a href="/" style="text-decoration: none"> POINT.ID</a></p>

    <v-row class="mx-auto">
      <v-col>
        <v-form v-model="isValid">
          <v-card
            class="mx-auto pa-8"
            max-width="920px"
            elevation="0"
            color="white"
          >
            <v-card-title class="font-weight-bold">Ubah Profile</v-card-title>
            <div class="px-4">
              <v-row>
                <v-col cols="4">
                  <h4 class="ml-2 font-weight-regular grey--text mb-12">
                    Nama Kamu
                  </h4>
                </v-col>
                <v-col cols="4">
                  <h4
                    class="ml-2 font-weight-regular grey--text mb-12"
                    v-if="!isNameEdited"
                  >
                    {{ UserData.fullname }}
                  </h4>
                  <v-text-field
                    class="mr-3"
                    outlined
                    solo
                    dense
                    v-if="isNameEdited"
                    :label="UserData.fullname"
                    v-model="editedName"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <a @click="isNameEdited = !isNameEdited" v-if="!isNameEdited">
                    Ubah
                  </a>
                  <a @click="isNameEdited = !isNameEdited" v-else> Batal </a>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <h4 class="ml-2 font-weight-regular grey--text mb-12">
                    Email
                  </h4>
                </v-col>
                <v-col cols="4">
                  <h4
                    class="ml-2 font-weight-regular grey--text mb-12"
                    v-if="!isEmailEdited"
                  >
                    {{ UserData.email }}
                  </h4>

                  <v-text-field
                    class="mr-3"
                    outlined
                    solo
                    dense
                    v-if="isEmailEdited"
                    :label="UserData.email"
                    v-model="editedEmail"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <a
                    @click="isEmailEdited = !isEmailEdited"
                    v-if="!isEmailEdited"
                  >
                    Ubah
                  </a>
                  <a @click="isEmailEdited = !isEmailEdited" v-else> Batal </a>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <h4 class="ml-2 font-weight-regular grey--text mb-12">
                    Nomor Handphone
                  </h4>
                </v-col>
                <v-col cols="4">
                  <h4
                    class="ml-2 font-weight-regular grey--text mb-12"
                    v-if="!isPhoneNumberEdited"
                  >
                    {{ UserData.no_hp }}
                  </h4>

                  <v-text-field
                    class="mr-3"
                    outlined
                    solo
                    dense
                    v-if="isPhoneNumberEdited"
                    :label="UserData.no_hp"
                    v-model="editedPhoneNumber"
                    :rules="numberRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <a
                    @click="isPhoneNumberEdited = !isPhoneNumberEdited"
                    v-if="!isPhoneNumberEdited"
                  >
                    Ubah
                  </a>
                  <a @click="isPhoneNumberEdited = !isPhoneNumberEdited" v-else>
                    Batal
                  </a>
                </v-col>
              </v-row>
            </div>

            <div class="d-flex justify-end mr-3">
              <v-btn
                width="168px"
                style="color: white"
                color="#3790FC"
                @click="handleEditCustomer"
                :disabled="!isValid"
              >
                Simpan
              </v-btn>
            </div>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
    <v-dialog v-model="openSuccesModal" width="500">
      <v-card color="#F0F4F9" class="px-6 py-6">
        <h3>Data berhasil disimpan</h3>
        <v-divider class="mb-10"></v-divider>

        <v-card-actions class="justify-end">
          <v-btn
            dark
            @click="openSuccesModal = !openSuccesModal"
            color="#3790FC"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "ProfilePagePage",
  layout: "user",
  middleware: ["auth"],
  data() {
    return {
      isNameEdited: false,
      isEmailEdited: false,
      isPhoneNumberEdited: false,

      isValid: false,
      numberRules: [
        (v) => Number.isInteger(Number(v)) || "harus angka",
        (v) => v.length > 10 || "minimal 11 digit",
      ],

      editedName: "",
      editedEmail: "",
      editedPhoneNumber: "",

      openSuccesModal: false,
    };
  },
  computed: {
    UserData() {
      return this.$store.state.Authentication.userDataList;
    },
    customerId() {
      return this.$route.params.id;
    },
  },
  methods: {
    async handleEditCustomer() {
      const header = {
        Authorization: "Bearer " + this.$cookies.get("userData").token,
        "Content-type": "application/json",
      };

      await this.$axios
        .put(
          `${this.$axios.defaults.baseURL}/customer`,
          {
            id: parseInt(this.customerId),
            name: this.editedName,
            email: this.editedEmail,
            no_hp: this.editedPhoneNumber,
          },
          {
            headers: header,
          }
        )
        .then((res) => {
          if (res.data.code === 200) {
            this.openSuccesModal = true;
            this.$store.dispatch(
              "Authentication/fetchDataCustomer",
              this.customerId
            );
            (this.isNameEdited = false),
              (this.isEmailEdited = false),
              (this.isPhoneNumberEdited = false);
          }
        });
    },
  },
  mounted() {
    this.$store.dispatch("Authentication/fetchDataCustomer", this.customerId);
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
