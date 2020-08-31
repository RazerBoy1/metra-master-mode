<template>
    <div id="app" :class="['background', 'disable-select']"
         :style="{ 'background-image': 'url(' + backgroundImage + ')' }" style="background-size: 100%">
        <PopUp ref="popUp"/>
        <router-view align="center"/>
    </div>
</template>

<script>
    import PopUp from './components/popUp'

    export default {
        name: 'App',
        components: {
            PopUp
        },
        mounted() {
            this.connection.on('connect', () => {
                console.log('connected: ' + this.connection.connected)
            })

            this.connection.on('OPENED_LOCKER', (number) => {
                this.$refs.popUp.show(number)
            })

            this.connection.on('OPENED_ALL_LOCKERS', () => {
                this.firstStageAll = false
                this.secondStageAll = true
            })

            this.connection.on('OPENED_ALL_LOCKERS_ON_LOCATION', () => {
                this.firstStageGroup = false
                this.secondStageGroup = true
            })
        },
        computed: {
            backgroundImage: {
                get() {
                    return this.$store.getters['masterMode/getBackgroundImage']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setBackgroundImage', val)
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

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

    html, body {
        margin: 0;
        padding: 0;
        width: 800px;
        min-width: 800px;
        max-width: 800px;
        height: 480px;
        min-height: 480px;
        max-height: 480px;
    }

    .background {
        height: 100%;

        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
    }

    .disable-select {
        user-select: none; /* supported by Chrome and Opera */
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
    }

    p {
        color: white;
        font-size: 20px;
        font-weight: bold;
    }
</style>
