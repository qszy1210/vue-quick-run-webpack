<template>
    <div>
        <slot name="inner" :data="data">
            hello, i'm inner default
        </slot>

        {{hasInner?"hasInner":""}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: '123'
            }
        },
        computed: {
            hasInner() {
                 console.log('inner:::::::', this.$slots, this.$slots.inner)
                return this.$slots.inner
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>