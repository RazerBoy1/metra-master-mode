<template>
    <div class="overlay" :style="showPopUp">
        <div class="overlay-content">
            <table align="center">
                <tr>
                    <p>Locker Unlocked {{ lockerNumber }} </p>
                </tr>
                <div>
                    <td>
                        <img :src="L0c" style="margin-bottom: 40px; margin-right: 50px">
                    </td>
                    <td>
                        <img :src="ok1">
                    </td>
                </div>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'popUp',
        data() {
            return {
                wallpaper01: require('../assets/backgrounds/wallpaper01.png'),
                ok1: require('../assets/UI/OK1.png'),
                L0c: require('../assets/UI/L0c.png'),

                lockerNumber: '',
                showPopUp: 'width: 0; height: 0'
            }
        },
        methods: {
            show(lockerNumber) {
                this.lockerNumber = lockerNumber
                this.showPopUp = 'width: 800px; height: 480px'
                this.timeout(750)
            },
            hide() {
                this.showPopUp = 'width: 0'
            },
            timeout(time) {
                setTimeout(() => {
                    this.hide()
                }, time)
            }
        },
        watch: {
            secondStage(value) {
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
