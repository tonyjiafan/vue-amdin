<template>
    <div>
        <h1>Home-Index</h1>
        <UpLoad v-model="url"></UpLoad>
    </div>
</template>
<script>
import UpLoad from '@/components/upload/index'

export default {
    components: {
        UpLoad
    },
    data() {
        return {
            // url: ''
            url: 'https://file.iviewui.com/dist/7dcf5af41fac2e4728549fa7e73d61c5.svg'
        }
    },
    methods: {

    }
}
</script>
<style lang="less">

</style>
