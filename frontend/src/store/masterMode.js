const io = require('socket.io-client')

const masterMode = {
    namespaced: true,
    state: {
        backgroundImage: require('../assets/backgrounds/Metra-linux-screen.jpg'),
        showSingleButton: false,

        single: true,
        multiple: false,
        group: false,
        fourth: false,
        settings: false,

        text: '',

        connection: io('http://' + document.domain + ':5000', {
            transports: ['websocket'],
            upgrade: false,
            rejectUnauthorized: false
        }),

        settingsData: null,

        firstStageAll: false,
        secondStageAll: false,

        firstStageGroup: false,
        secondStageGroup: false,
    },
    actions: {
        setBackgroundImage({commit}, backgroundImage) {
            commit('setBackgroundImage', backgroundImage)
        },
        setSingle({commit}, single) {
            commit('setSingle', single)
        },
        setMultiple({commit}, multiple) {
            commit('setMultiple', multiple)
        },
        setGroup({commit}, group) {
            commit('setGroup', group)
        },
        setFourth({commit}, fourth) {
            commit('setFourth', fourth)
        },
        setSettings({commit}, settings) {
            commit('setSettings', settings)
        },
        setText({commit}, text) {
            commit('setText', text)
        },
        setShowSingleButton({commit}, showSingleButton) {
            commit('setShowSingleButton', showSingleButton)
        },
        setConnection({commit}, connection) {
            commit('setConnection', connection)
        },
        setSettingsData({commit}, settingsData) {
            commit('setSettingsData', settingsData)
        },
        setFirstStageAll({commit}, firstStageAll) {
            commit('setFirstStageAll', firstStageAll)
        },
        setSecondStageAll({commit}, secondStageAll) {
            commit('setSecondStageAll', secondStageAll)
        },
        setFirstStageGroup({commit}, firstStageGroup) {
            commit('setFirstStageGroup', firstStageGroup)
        },
        setSecondStageGroup({commit}, secondStageGroup) {
            commit('setSecondStageGroup', secondStageGroup)
        }
    },
    mutations: {
        setBackgroundImage(state, backgroundImage) {
            state.backgroundImage = backgroundImage
        },
        setSingle(state, single) {
            state.single = single
        },
        setMultiple(state, multiple) {
            state.multiple = multiple
        },
        setGroup(state, group) {
            state.group = group
        },
        setFourth(state, fourth) {
            state.fourth = fourth
        },
        setSettings(state, settings) {
            state.settings = settings
        },
        setText(state, text) {
            state.text = text
        },
        setShowSingleButton(state, showSingleButton) {
            state.showSingleButton = showSingleButton
        },
        setConnection(state, connection) {
            state.connection = connection
        },
        setSettingsData(state, settingsData) {
            state.settingsData = settingsData
        },
        setFirstStageAll(state, firstStageAll) {
            state.firstStageAll = firstStageAll
        },
        setSecondStageAll(state, secondStageAll) {
            state.secondStageAll = secondStageAll
        },
        setFirstStageGroup(state, firstStageGroup) {
            state.firstStageGroup = firstStageGroup
        },
        setSecondStageGroup(state, secondStageGroup) {
            state.secondStageGroup = secondStageGroup
        }
    },
    getters: {
        getBackgroundImage(state) {
            return state.backgroundImage
        },
        getSingle(state) {
            return state.single
        },
        getMultiple(state) {
            return state.multiple
        },
        getGroup(state) {
            return state.group
        },
        getFourth(state) {
            return state.fourth
        },
        getSettings(state) {
            return state.settings
        },
        getText(state) {
            return state.text
        },
        getShowSingleButton(state) {
            return state.showSingleButton
        },
        getConnection(state) {
            return state.connection
        },
        getSettingsData(state) {
            return state.settingsData
        },
        getFirstStageAll(state) {
            return state.firstStageAll
        },
        getSecondStageAll(state) {
            return state.secondStageAll
        },
        getFirstStageGroup(state) {
            return state.firstStageGroup
        },
        getSecondStageGroup(state) {
            return state.secondStageGroup
        }
    }
}

export default masterMode
