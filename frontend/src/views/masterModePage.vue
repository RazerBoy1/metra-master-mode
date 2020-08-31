<template>
    <div>
        <div class="table">
            <table style="table-layout: fixed; width: 500px">
                <tr>
                    <td>
                        <LeftSideNav/>
                    </td>
                    <td align="center" colspan="8">
                        <KeyPad v-if="multiple || single"/>
                        <Group v-if="group"/>
                        <Settings v-if="settings"/>
                    </td>
                    <td>
                        <RightSideNav/>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import KeyPad from '../components/keypad'
import Group from '../components/group'
import RightSideNav from '../components/rightSideNav'
import LeftSideNav from '../components/leftSideNav'
import Settings from '../components/settings'

export default {
    name: 'MasterModePage',
    components: {
        Settings,
        KeyPad,
        Group,
        RightSideNav,
        LeftSideNav
    },
    data() {
        return {
            isInactive: false,
            userActivityThrottlerTimeout: null,
            userActivityTimeout: null,
            INACTIVE_USER_TIME_THRESHOLD: 20 * 1000,
            USER_ACTIVITY_THROTTLER_TIME: 1000
        }
    },
    methods: {
        activateActivityTracker() {
            window.addEventListener('mousemove', this.userActivityThrottler)
            window.addEventListener('click', this.userActivityThrottler)
            window.addEventListener('input', this.userActivityThrottler)
        },
        deactivateActivityTracker() {
            window.removeEventListener('mousemove', this.userActivityThrottler)
            window.removeEventListener('click', this.userActivityThrottler)
            window.removeEventListener('input', this.userActivityThrottler)
        },
        resetUserActivityTimeout() {
            clearTimeout(this.userActivityTimeout)

            this.userActivityTimeout = setTimeout(() => {
                this.userActivityThrottler()
                this.inactiveUserAction()
            }, this.INACTIVE_USER_TIME_THRESHOLD)
        },
        userActivityThrottler() {
            if (this.isInactive)
                this.isInactive = false

            if (!this.userActivityThrottlerTimeout)
                this.userActivityThrottlerTimeout = setTimeout(() => {
                    this.resetUserActivityTimeout()
                    clearTimeout(this.userActivityThrottlerTimeout)
                    this.userActivityThrottlerTimeout = null
                }, this.USER_ACTIVITY_THROTTLER_TIME)
        },
        inactiveUserAction() {
            this.text = ''
            this.backgroundImage = require('../assets/backgrounds/Metra-linux-screen.jpg')

            this.connection.emit('SEND_TIMEOUT')
            this.$router.push('/home')
        }
    },
    beforeMount() {
        this.activateActivityTracker()
    },
    beforeDestroy() {
        this.deactivateActivityTracker()
        clearTimeout(this.userActivityTimeout)
        clearTimeout(this.userActivityThrottlerTimeout)
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
