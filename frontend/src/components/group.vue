<template>
    <div id="Group">
        <PopUpAll ref="popUpAll"/>
        <PopUpGroup ref="popUpGroup"/>

        <table>
            <tr>
                <div class="center">
                    <p>Open All Lockers</p>
                    <img :src="openAll1" @click="showPopUp('groupAll')">
                </div>
            </tr>
            <tr>
                <div class="center">
                    <p>Open All Lockers On This Location</p>
                    <img :src="openAll2" @click="showPopUp('groupLocation')">
                </div>
            </tr>
        </table>
    </div>
</template>

<script>
    import PopUpAll from './popUpAll'
    import PopUpGroup from './popUpGroup'

    export default {
        name: 'Group',
        components: {
            PopUpAll,
            PopUpGroup
        },
        data() {
            return {
                openAll1: require('../assets/UI/OpenAll1_A.png'),
                openAll2: require('../assets/UI/OpenAll2_A.png')
            }
        },
        methods: {
            showPopUp(mode) {
                switch (mode) {
                    case 'groupAll':
                        this.firstStageAll = true
                        this.$refs.popUpAll.show()

                        this.connection.emit('SEND_OPEN_ALL_LOCKERS')
                        break
                    case 'groupLocation':
                        this.firstStageGroup = true
                        this.$refs.popUpGroup.show()

                        this.connection.emit('SEND_OPEN_ALL_LOCKERS_ON_LOCATION')
                        break
                }
            }
        },
        computed: {
            connection: {
                get() {
                    return this.$store.getters['masterMode/getConnection']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setConnection', val)
                }
            },
            firstStageAll: {
                get() {
                    return this.$store.getters['masterMode/getFirstStageAll']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setFirstStageAll', val)
                }
            },
            secondStageAll: {
                get() {
                    return this.$store.getters['masterMode/getSecondStageAll']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setSecondStageAll', val)
                }
            },
            firstStageGroup: {
                get() {
                    return this.$store.getters['masterMode/getFirstStageGroup']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setFirstStageGroup', val)
                }
            },
            secondStageGroup: {
                get() {
                    return this.$store.getters['masterMode/getSecondStageGroup']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setSecondStageGroup', val)
                }
            }
        }
    }
</script>

<style scoped>
    table {
        border-collapse: separate;
        border-spacing: 0 50px;
    }

    div {
        width: 250px;
    }

    img {
        width: 40%;
    }

    .center {
        text-align: center;
    }
</style>
