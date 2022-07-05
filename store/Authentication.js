const state = () => ({
  UserData: [],
});

const mutations = {
  setUserData(state, param) {
    state.UserData = param;
  },
  clearDataUser(state) {
    state.UserData = [];
  },
};

const actions = {
  async fetchLogin(store, param) {
    const response = await this.$axios.post(
      `${this.$axios.defaults.baseURL}/customer`,
      {
        email: param.email,
        password: param.password,
      }
    );
    //   .then((res) => {
    //     localStorage.setItem("token", res.data.result.token);
    //     store.commit("setToken", res.data.result.token);
    //     this.$router.push("/");
    //   })
    //   .cacth((err) => {
    //     console.log(err);
    //   });
    this.$cookies.set("userData", response.data.result, {
      path: "/",
      maxAge: 60 * 60,
    });
    store.commit("setUserData", response.data.result);

    this.$router.push("/");
  },
  fetchLogout(store) {
    this.$cookies.remove("userData");
    store.commit("clearDataUser");
    location.reload();
  },
};

export { state, mutations, actions };
