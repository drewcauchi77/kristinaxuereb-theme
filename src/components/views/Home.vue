<template>
    <div class="content-container">
        <div class="page-content" v-if="!loading">
            <img :src="allHomeContent.acf.image.url" :alt="allHomeContent.acf.image.alt">
            <h1>{{ allHomeContent.acf.tagline }}</h1>
            <div class="social-list">
                <div class="social-item">
                    <a href="#" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </div>

                <div class="social-item">
                    <a href="#" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                </div>

                <div class="social-item">
                    <a href="#" target="_blank">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>

                <div class="social-item">
                    <a href="#" target="_blank">
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </div>

        <Loading v-else />
    </div>
</template>

<script>
import axios from 'axios'
import Loading from '../partials/Loading'

export default {
    name: 'Home',
    components: {
        Loading
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
            .social-list{
                display: grid;
                grid-template-columns: repeat(4, 45px);
                height: 45px;
                grid-column-gap: 15px;
                margin: 0 auto;
                .social-item{
                    border-radius: 50%;
                    background-color: #1B1B1B;
                    z-index: 3;
                    transition: 0.5s all;
                    a{
                        display: block;
                        height: 100%;
                        width: 100%;
                        position: relative;
                        svg{
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            margin: auto;
                            color: #FFFFFF;
                            font-size: 26px;
                        }
                    }
                    &:hover{
                        transform: scale(1.2);
                        background-color: #000000;
                    }
                }
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
                .social-list{
                    grid-template-columns: repeat(4, 60px);
                    height: 60px;
                    grid-column-gap: 30px;
                    .social-item{
                        a{
                            svg{
                                font-size: 35px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>