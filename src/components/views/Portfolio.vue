<template>
    <div class="content-container">
        <div class="page-content padding-sect" v-if="!loading">
            <h1>{{ allPortfolioContent.acf.title }}</h1>
            <h2>{{ allPortfolioContent.acf.tagline }}</h2>

            <Projects />
        </div>

        <Loading v-else />
    </div>
</template>

<script>
import axios from 'axios'
import Projects from '../partials/Projects'
import Loading from '../partials/Loading'

export default {
    name: 'Portfolio',
    components: {
        Projects,
        Loading
    },
    data() {
        return {
            loading: true,
            allPortfolioContent: []
        }
    },
    created() {
        this.fetchPortfolioContent()
    },
    methods: {
        async fetchPortfolioContent(){
            const response = await axios.get('/wp-json/wp/v2/pages?slug=projects')

            this.allPortfolioContent = response.data[0]
            this.loading = false
        }
    }
}
</script>

<style lang="scss" scoped>
    .content-container{
        max-width: 1360px;
        .page-content{
            h1, h2{
                text-align: center;
                padding-bottom: 30px;
            }
        }
    }
</style>