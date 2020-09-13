<template>
    <div>
        <h2>Work 工作</h2>
        <HtmlEditor v-model="html_str"></HtmlEditor>
        <div v-html="html_str" style="margin-top: 50px"></div>
    </div>
</template>
<script>

import HtmlEditor from '@/components/html-editor/index'

export default {
    components: {
        HtmlEditor,
    },
    data() {
        return {
            html_str: '搞不明白这是什么意思...'
        }
    }
}
</script>
<style lang="less">

</style>
