export const state = () => ({
  apiToken: null
});

export const mutations = {
  setApiToken(state, token) {
    state.apiToken = token;
  }
};
