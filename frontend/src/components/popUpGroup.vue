<template>
    <div class="overlay" :style="showPopUp">
        <div class="overlay-content">
            <table align="center">
                <div v-if="firstStageGroup">
                    <tr>
                        <p>Present Master Card To The RFID Reader To Confirm Unlocking Of All Lockers On Current Location</p>
                    </tr>
                    <tr>
                        <img style="margin-left: 15%; height: 250px" :src="ani">
                    </tr>
                    <tr>
                        <img :src="cancel" style="height: 30px; width: 30px" align="left" @click="hide">
                    </tr>
                </div>
                <div v-if="secondStageGroup" align="center">
                    <tr>
                        <p>Unlocking All Lockers On This Location</p>
                    </tr>
                    <img :src="allUnlocked">
                </div>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'popUpGroup',
        data() {
            return {
                allUnlocked: require('../assets/UI/AllUnlocked.png'),
                wallpaper01: require('../assets/backgrounds/wallpaper01.png'),
                ok1: require('../assets/UI/OK1.png'),
                L0c: require('../assets/UI/L0c.png'),

                cancel: require('../assets/UI/Cancel_A.png'),
                ani: require('../assets/UI/ani.gif'),

                showPopUp: 'width: 0'
            }
        },
        methods: {
            show() {
                this.showPopUp = 'width: 800px; height: 480px'
            },
            hide() {
                this.showPopUp = 'width: 0'
                this.secondStageGroup = false
            },
            timeout(time) {
                setTimeout(() => {
                    this.hide()
                }, time)
            }
        },
        computed: {
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
        },
        watch: {
            secondStageGroup(value) {
                if (value === true)
                    this.timeout(2000)
            }
        }
    }
</script>

<style scoped>
    p {
        font-size: 25px;
    }

    img {
        height: 55%;
        width: 55%;
    }

    /* The Overlay (background) */
    .overlay {
        /* Height & width depends on how you want to reveal the overlay (see JS below) */
        height: 100%;
        width: 0;
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        background-color: black; /* Black w/opacity */
        overflow-x: hidden; /* Disable horizontal scroll */
    }

    /* Position the content inside the overlay */
    .overlay-content {
        position: relative;
        top: 15%; /* 15% from the top */
        width: 100%; /* 100% width */
        text-align: center; /* Centered text/links */
    }

    /* Position the close button (top right corner) */
    .overlay .close-btn {
        position: absolute;
        top: 20px;
        right: 45px;
        font-size: 60px;
    }
</style>
