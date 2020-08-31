<template>
    <div id="RightSideNav" align="center">
        <table>
            <tr v-if="showSingleButton">
                <img :src="singleA" class="image" @click="showSingleView">
            </tr>
            <tr v-else>
                <img :src="rangeA" class="image" @click="showMultipleView">
            </tr>
            <tr>
                <img :src="allA" class="image" @click="showGroupView">
            </tr>
            <tr>
                <img :src="viewA" class="image" @click="showFourthView">
            </tr>
            <tr>
                <button @click="showSettingsView">
                    Settings
                </button>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'RightSideNav',
        data() {
            return {
                singleA: require('../assets/UI/Single_A.png'),
                allA: require('../assets/UI/All_A.png'),
                rangeA: require('../assets/UI/Range_A.png'),
                viewA: require('../assets/UI/View_A.png')
            }
        },
        mounted() {
            this.connection.on('SETTINGS_DATA', (settingsData) => {
                this.settingsData = settingsData
            })
        },
        methods: {
            showSingleView() {
                this.text = ''

                this.single = true
                this.multiple = this.group = this.fourth = this.settings = false

                this.showSingleButton = false
            },
            showMultipleView() {
                this.text = ''

                this.multiple = true
                this.single = this.group = this.fourth = this.settings = false

                this.showSingleButton = true
            },
            showGroupView() {
                this.group = true
                this.single = this.multiple = this.fourth = this.settings = false
            },
            showFourthView() {
                this.fourth = true
                this.single = this.multiple = this.group = this.settings = false
            },
            showSettingsView() {
                this.connection.emit('GET_SETTINGS_DATA')

                this.settings = true

                this.single = this.multiple = this.group = this.fourth = false
            }
        },
        computed: {
            single: {
                get() {
                    return this.$store.getters['masterMode/getSingle']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setSingle', val)
                }
            },
            multiple: {
                get() {
                    return this.$store.getters['masterMode/getMultiple']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setMultiple', val)
                }
            },
            group: {
                get() {
                    return this.$store.getters['masterMode/getGroup']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setGroup', val)
                }
            },
            fourth: {
                get() {
                    return this.$store.getters['masterMode/getFourth']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setFourth', val)
                }
            },
            settings: {
                get() {
                    return this.$store.getters['masterMode/getSettings']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setSettings', val)
                }
            },
            text: {
                get() {
                    return this.$store.getters['masterMode/getText']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setText', val)
                }
            },
            showSingleButton: {
                get() {
                    return this.$store.getters['masterMode/getShowSingleButton']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setShowSingleButton', val)
                }
            },
            settingsData: {
                get() {
                    return this.$store.getters['masterMode/getSettingsData']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setSettingsData', val)
                }
            },
            connection: {
                get() {
                    return this.$store.getters['masterMode/getConnection']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setConnection', val)
                }
            }
        }
    }
</script>

<style scoped>
    table {
        border-collapse: separate;
        border-spacing: 0 40px;
    }

    .image {
        display: inline-block;
        border-radius: 50%;
        width: 90%;
    }

    .image:active {
        box-shadow: 0 0 1px 3px deepskyblue;
    }
</style>
