import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import User from './modules/user';
import Session from './modules/sessions';

Vue.use(Vuex);

const persistedStateData = createPersistedState({
    paths: ['Session.email', 'Session.token'],
});

export default new Vuex.Store({
    modules: {
        User,
        Session,
    },
    plugins: [persistedStateData],
});