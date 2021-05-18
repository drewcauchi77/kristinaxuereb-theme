<template>
    <div class="container">
        <div class="page-content" v-if="!loading">
            <h1>{{ allHomeContent.title.rendered }}</h1>
            <p v-html="allHomeContent.content.rendered"></p>
        </div>

        <div v-else>
            <h1>Loading</h1>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Home',
    data() {
        return {
            loading: true,
            allHomeContent: []
        }
    },
    created() {
        this.fetchHomeContent()
    },
    methods: {
        async fetchHomeContent(){
            const response = await axios.get('http://kristina.ax/wp-json/wp/v2/pages?slug=home')

            this.allHomeContent = response.data[0]
            this.loading = false
        }
    },
}
</script>

<style lang="scss" scoped>

</style>