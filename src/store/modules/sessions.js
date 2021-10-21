const state = {
    email: 'lalalapotate@batata.com',
    token: 'abatatapodre',
};

const getters = {
    hasSession($state){
        return !!$state.email && !!$state.token;
    },
    getEmail($state) {
        return $state.email;
    },
    getToken($state) {
        return $state.token;
    },
};

const actions = {
    createSession({ commit }, payload) {
        commit('setCredentials', payload);
    },

    refreshSession({ commit, dispatch }, payload) {
        dispatch('destroySession');
        commit('createSession', payload);
    },

    destroySession({ commit }) {
        commit('destroyCredentials');
    },

    updateToken({ commit, state }, newToken) {
        commit('setCredentials', { email: state.email, token: newToken });
    },
};

export default {
    state,
    getters,
    actions,
};