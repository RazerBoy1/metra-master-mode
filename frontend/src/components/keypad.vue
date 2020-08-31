<template>
    <div id="KeyPad">
        <table>
            <tr class="center">
                <p>ENTER LOCKER NUMBER</p>
            </tr>
            <tr class="center">
                <img style="width: 30%" v-if="single" :src="L2b">
                <img style="width: 60%" v-else :src="Lrange"/>
            </tr>
            <tr class="center">
                <input v-model="text" type="text">
            </tr>
            <tr>
                <table align="center">
                    <tr>
                        <td>
                            <img :src="num1A" class="image" @click="text += '1'">
                        </td>
                        <td>
                            <img :src="num2A" class="image" @click="text += '2'">
                        </td>
                        <td>
                            <img :src="num3A" class="image" @click="text += '3'">
                        </td>
                        <td v-if="multiple">
                            <img :src="numMA" class="image" @click="text += '-'">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img :src="num4A" class="image" @click="text += '4'">
                        </td>
                        <td>
                            <img :src="num5A" class="image" @click="text += '5'">
                        </td>
                        <td>
                            <img :src="num6A" class="image" @click="text += '6'">
                        </td>
                        <td v-if="multiple">
                            <img :src="numVA" class="image" @click="text += ','">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img :src="num7A" class="image" @click="text += '7'">
                        </td>
                        <td>
                            <img :src="num8A" class="image" @click="text += '8'">
                        </td>
                        <td>
                            <img :src="num9A" class="image" @click="text += '9'">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img :src="numXA" class="image" @click="text = ''">
                        </td>
                        <td>
                            <img :src="num0A" class="image" @click="text += '0'">
                        </td>
                        <td>
                            <img :src="numOA" class="image" @click="openSingleOrMultipleRequest">
                        </td>
                    </tr>
                </table>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'KeyPad',
        data() {
            return {
                lockersToUnlock: [],

                num0A: require('../assets/keypad/num0_A.png'),
                num0B: require('../assets/keypad/num0_B.png'),
                num1A: require('../assets/keypad/num1_A.png'),
                num1B: require('../assets/keypad/num1_B.png'),
                num2A: require('../assets/keypad/num2_A.png'),
                num2B: require('../assets/keypad/num2_B.png'),
                num3A: require('../assets/keypad/num3_A.png'),
                num3B: require('../assets/keypad/num3_B.png'),
                num4A: require('../assets/keypad/num4_A.png'),
                num4B: require('../assets/keypad/num4_B.png'),
                num5A: require('../assets/keypad/num5_A.png'),
                num5B: require('../assets/keypad/num5_B.png'),
                num6A: require('../assets/keypad/num6_A.png'),
                num6B: require('../assets/keypad/num6_B.png'),
                num7A: require('../assets/keypad/num7_A.png'),
                num7B: require('../assets/keypad/num7_B.png'),
                num8A: require('../assets/keypad/num8_A.png'),
                num8B: require('../assets/keypad/num8_B.png'),
                num9A: require('../assets/keypad/num9_A.png'),
                num9B: require('../assets/keypad/num9_B.png'),

                numMA: require('../assets/keypad/numM_A.png'),
                numMB: require('../assets/keypad/numM_B.png'),
                numVA: require('../assets/keypad/numV_A.png'),
                numVB: require('../assets/keypad/numV_B.png'),

                numOA: require('../assets/keypad/numOpen_A.png'),
                numOB: require('../assets/keypad/numOpen_B.png'),
                numXA: require('../assets/keypad/numX_A.png'),
                numXB: require('../assets/keypad/numX_B.png'),

                L2b: require('../assets/UI/L2b.png'),
                Lrange: require('../assets/UI/Lrange.png')
            }
        },
        methods: {
            openSingleOrMultipleRequest() {
                if (this.single && this.text !== '')
                    this.lockersToUnlock.push(this.text)
                else if (this.multiple && this.text !== '') {
                    let commaSplit = this.text.split(',')

                    commaSplit.forEach(x => {
                        if (x.match('^[0-9]+-[0-9]+$')) {
                            let dashSplit = x.split('-')

                            for (let i = parseInt(dashSplit[0]); i <= parseInt(dashSplit[1]); i++)
                                this.lockersToUnlock.push(i)
                        } else if (x.match('^[0-9]+$'))
                            this.lockersToUnlock.push(x)
                    })
                }

                this.connection.emit('SEND_OPEN_LOCKERS', {
                    lockersToUnlock: this.lockersToUnlock
                })

                this.lockersToUnlock = []
                this.text = ''
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
            text: {
                get() {
                    return this.$store.getters['masterMode/getText']
                },
                set(val) {
                    this.$store.dispatch('masterMode/setText', val)
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
    input {
        width: 55%;
        background: transparent;
        border: none;
        margin: 10px;
        font-size: 20px;
        color: white;
    }

    .image {
        display: inline-block;
        border-radius: 50%;
        width: 75%;
    }

    .image:active {
        box-shadow: 0 0 1px 3px deepskyblue;
    }

    .center {
        text-align: center;
        border-collapse: separate;
        border-spacing: 0 130px;
    }
</style>
