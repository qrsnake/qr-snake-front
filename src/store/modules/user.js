const state = {
    user: {
        name: 'Sr Batata',
        email: 'user@ucdb.br',
        token: 'batata123',
        password: 'potato123'
    },
};

const getters = {
    currentUser: () => (state.user),
};

const actions = {
    
};

const mutations = {

};
export default {
    state,
    getters,
    actions,
    mutations,
};