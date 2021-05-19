<template>
    <div class="content-container">
        <div class="page-content" v-if="!loading">
            <h1>{{ allAboutContent.acf.title }}</h1>
            <div class="image-sect">
                <img :src="allAboutContent.acf.image.url" :alt="allAboutContent.acf.image.alt">
                <div class="circle"></div>
            </div>
            <div class="about-sect" v-for="content in allAboutContent.acf.content" v-html="content.content" :key="content.index"></div>
        </div>

        <Loading v-else />
    </div>
</template>

<script>
import axios from 'axios'
import Loading from '../partials/Loading'

export default {
    name: 'About',
    components: {
        Loading
    },
    data() {
        return {
            loading: true,
            allAboutContent: []
        }
    },
    created() {
        this.fetchAboutContent()
    },
    methods: {
        async fetchAboutContent(){
            const response = await axios.get('/wp-json/wp/v2/pages?slug=about')

            this.allAboutContent = response.data[0]
            this.loading = false
        }
    },
}
</script>

<style lang="scss" scoped>
    .content-container{
        max-width: 1360px;
        .page-content{
            padding: 40px 0px;
            h1{
                text-align: center;
                margin-bottom: 40px;
            }
            .image-sect{
                position: relative;
                max-width: 350px;
                margin: 0 auto;
                img{
                    width: 100%;
                    border-radius: 50%;
                    display: block;
                    z-index: 1;
                    position: relative;
                }
                .circle{
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 150px;
                    width: 150px;
                    background: rgba(153, 184, 205, 0.4);
                    border-radius: 50%;
                }
            }
            .about-sect{
                margin-top: 40px;
            }
        }
    }

    @media only screen and (min-width: 768px){
        .content-container{
            .page-content{
                display: grid;
                grid-template-columns: 2fr 1fr;
                grid-column-gap: 40px;
                grid-row-gap: 20px;
                padding: 90px 0px;
                h1{
                    margin: 0px;
                    text-align: left;
                    align-self: end;
                }
                .image-sect{
                    grid-row-start: 1;
                    grid-row-end: 3;
                    grid-column-start: 2;
                    max-width: 250px;
                    .circle{
                        top: -15px;
                        right: -15px;
                    }
                }
                .about-sect{
                    margin: 0px;
                    grid-column: 1/2;
                    &:nth-child(n+4){
                        grid-column: 1/3
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 992px){
        .content-container{
            .page-content{
                grid-row-gap: 40px;
                .image-sect{
                    max-width: 300px;
                    align-self: center;
                    .circle{
                        top: -30px;
                        right: -30px;
                    }
                }
                .about-sect{
                    align-self: center;
                }
            }
        }
    }
</style>