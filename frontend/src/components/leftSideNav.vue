<template>
    <div id="LeftSideNav" align="center">
        <img :src="homeA" class="image" @click="goToHomePage">
    </div>
</template>

<script>
    export default {
        name: 'LeftSideNav',
        data() {
            return {
                homeA: require('../assets/UI/Home_A.png')
            }
        },
        methods: {
            goToHomePage() {
                this.text = ''
                this.backgroundImage = require('../assets/backgrounds/Metra-linux-screen.jpg')

                this.$router.push('/home')
            }
        },
        computed: {
            text: {
                get() {
                    return this.$store.getters['masterMode/getText']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setText', val)
                }
            },
            backgroundImage: {
                get() {
                    return this.$store.getters['masterMode/getBackgroundImage']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setBackgroundImage', val)
                }
            }
        }
    }
</script>

<style scoped>
    .image {
        display: inline-block;
        border-radius: 50%;
    }

    .image:active {
        box-shadow: 0 0 3px 3px deepskyblue;
    }
</style>
