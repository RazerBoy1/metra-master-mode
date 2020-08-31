import Vue from 'vue'
import Vuex from 'vuex'

import masterMode from './masterMode'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        masterMode
    }
})

export default store
