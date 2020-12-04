<template>
    <div>
        <div>
            <slot name="aaa">
                backup
            </slot>
        </div>
        {{hasAAA? "hasAAA": ''}}
        <slot-inner>
            <template slot="inner" slot-scope="{data}">
                <slot name="bbb"></slot>
            </template>
        </slot-inner>
    </div>
</template>

<script>
import SlotInner from './SlotInner';
    export default {
        components: {
            SlotInner
        },
        data(){
            return {
                data: 'aaa'
            }
        },
        computed: {
            hasAAA() {
                console.log('xxxx', this.$slots, this.$slots.aaa)
                return this.$slots.aaa
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>