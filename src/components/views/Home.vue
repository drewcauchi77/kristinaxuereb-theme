<template>
    <div class="content-container">
        <div class="page-content" v-if="!loading">
            <img :src="allHomeContent.acf.image.url" :alt="allHomeContent.acf.image.alt">
            <h1>{{ allHomeContent.acf.tagline }}</h1>
            <Socials />
        </div>

        <Loading v-else />
    </div>
</template>

<script>
import axios from 'axios'
import Loading from '../partials/Loading'
import Socials from '../partials/Socials'

export default {
    name: 'Home',
    components: {
        Loading,
        Socials
    },
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
            const response = await axios.get('/wp-json/wp/v2/pages?slug=home')

            this.allHomeContent = response.data[0]
            this.loading = false
        }
    },
}
</script>

<style lang="scss" scoped>
    .content-container{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: 100%;
        .page-content{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            height: fit-content;
            display: flex;
            flex-flow: column;
            img{
                height: 80px;
                margin: 0 auto;
                display: block;
                z-index: 3;
            }
            h1{
                margin: 30px 20px;
                text-align: center;
            }
        }
    }

    @media only screen and (min-width: 768px){
        .content-container{
            .page-content{
                img{
                    height: 142px;
                }
                h1{
                    margin: 80px 30px;
                }
            }
        }
    }
</style>