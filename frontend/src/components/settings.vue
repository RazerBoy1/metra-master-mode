<template>
    <div id="Settings">
        <table align="center" style="width: 250px">
            <tr align="center">
                <div class="button-wrapper">
                    <p>Settings 1</p>
                    <button type="button" @click="settings('1')">Settings 1</button>
                </div>
                <div class="button-wrapper">
                    <p>Settings 2</p>
                    <button type="button" @click="settings('2')">Settings 2</button>
                </div>
                <div class="button-wrapper">
                    <p>Settings 3</p>
                    <button type="button" @click="settings('3')">Settings 3</button>
                </div>
                <div class="button-wrapper">
                    <p>Settings 4</p>
                    <button type="button" @click="settings('4')">Settings 4</button>
                </div>
            </tr>
            <tr>
                <div class="slide-container">
                    <input type="range" min="1" max="5" value="50" class="slider1" id="myRange1" @input="sendSlider()">
                </div>
            </tr>
            <tr>
                <div class="slide-container">
                    <input type="range" :value="settingsData['boolean']" min="0" max="1" class="slider2" id="myRange2" @input="sendSettingsData()">
                    <span style="padding-left: 20px; font-size: 40px" id="mySpan" @input="sendSettingsData()">{{ settingsData['number'] }}</span>
                </div>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Settings',
        methods: {
            settings(number) {
                this.connection.emit('SEND_SETTINGS', {
                    settings: 'settings' + number
                })
            },
            sendSlider() {
                let slider = document.getElementById('myRange1')

                this.connection.emit('SEND_SLIDER_VALUE', {
                    value: slider.value
                })
            },
            sendSettingsData() {
                this.settingsData['number'] = document.getElementById('mySpan').innerText
                this.settingsData['boolean'] = document.getElementById('myRange2').value

                this.connection.emit('SET_SETTINGS_DATA', this.settingsData)
            }
        },
        computed: {
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
    .button-wrapper {
        text-align: center;
        display: inline-block;
        margin: 10px;
    }

    button {
        color: white;
        width: 70%;
        height: 50%;
    }

    p {
        font-size: 20px;
    }

    .slide-container {
        width: 100%; /* Width of the outside container */
    }

    /* The slider itself */
    .slider1 {
        -webkit-appearance: none; /* Override default CSS styles */
        appearance: none;
        width: 80%; /* Full-width */
        height: 33px; /* Specified height */
        background: #d3d3d3; /* Grey background */
        outline: none; /* Remove outline */
        opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
        -webkit-transition: .2s; /* 0.2 seconds transition on hover */
        transition: opacity .2s;
    }

    /* Mouse-over effects */
    .slider1:hover {
        opacity: 1; /* Fully shown on mouse-over */
    }

    /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
    .slider1::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        width: 25px; /* Set a specific slider handle width */
        height: 25px; /* Slider handle height */
        background: #4CAF50; /* Green background */
        cursor: pointer; /* Cursor on hover */
    }

    .slider1::-moz-range-thumb {
        width: 25px; /* Set a specific slider handle width */
        height: 25px; /* Slider handle height */
        background: #4CAF50; /* Green background */
        cursor: pointer; /* Cursor on hover */
    }

    .slider2 {
        -webkit-appearance: none; /* Override default CSS styles */
        appearance: none;
        width: 20%; /* Full-width */
        height: 33px; /* Specified height */
        background: #d3d3d3; /* Grey background */
        outline: none; /* Remove outline */
        opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
        -webkit-transition: .2s; /* 0.2 seconds transition on hover */
        transition: opacity .2s;
    }

    /* Mouse-over effects */
    .slider2:hover {
        opacity: 1; /* Fully shown on mouse-over */
    }

    /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
    .slider2::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        width: 25px; /* Set a specific slider handle width */
        height: 25px; /* Slider handle height */
        background: #4CAF50; /* Green background */
        cursor: pointer; /* Cursor on hover */
    }

    .slider2::-moz-range-thumb {
        width: 25px; /* Set a specific slider handle width */
        height: 25px; /* Slider handle height */
        background: #4CAF50; /* Green background */
        cursor: pointer; /* Cursor on hover */
    }
</style>
