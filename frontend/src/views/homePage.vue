<template>
    <button @click="goToMasterModePage">Click me, please ! :)</button>
</template>

<script>
    export default {
        name: 'HomePage',
        mounted() {
            this.connection.on('GO_TO_MASTER_MODE', () => {
                this.goToMasterModePage()
            })
        },
        methods: {
            goToMasterModePage() {
                this.setMasterModePageVariables()

                this.$router.push('/masterMode')
            },
            setMasterModePageVariables() {
                this.single = true
                this.multiple = this.group = this.fourth = this.settings = this.showSingleButton = false
                this.backgroundImage = require('../assets/backgrounds/wallpaper01.png')
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
            showSingleButton: {
                get() {
                    return this.$store.getters['masterMode/getShowSingleButton']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setShowSingleButton', val)
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
            showPopUp: {
                get() {
                    return this.$store.getters['masterMode/getShowPopUp']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setShowPopUp', val)
                }
            },
            popUpVisibilityStyle: {
                get() {
                    return this.$store.getters['masterMode/getPopUpVisibilityStyle']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setPopUpVisibilityStyle', val)
                }
            },
            backgroundImage: {
                get() {
                    return this.$store.getters['masterMode/getBackgroundImage']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setBackgroundImage', val)
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
    button {
        height: 100px;
        width: 100px;
    }
</style>
