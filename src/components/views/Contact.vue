<template>
    <div class="content-container">
        <div class="page-content padding-sect" v-if="!loading">
            <h1>{{ allContactContent.acf.title }}</h1>
            
            <div class="contact-section">
                <div class="cv-sect sect">
                    <h2>CV</h2>
                    <div class="button">
                        <a href="#" target="_blank">
                            <span>View CV</span>
                        </a>
                    </div>
                </div>
                
                <div class="social-sect sect">
                    <h2>Get Connected</h2>
                    <Socials />
                </div>
            </div>

            <div class="form-section">
                <h2>{{ allContactContent.acf.tagline }}</h2>
                <div class="form-desc custom-desc" v-html="allContactContent.acf.content"></div>
            </div>
        </div>

        <Loading v-else />
    </div>
</template>

<script>
import axios from 'axios'
import Loading from '../partials/Loading'
import Socials from '../partials/Socials'

export default {
    name: 'Contact',
    components: {
        Loading,
        Socials
    },
    data() {
        return {
            loading: true,
            allContactContent: []
        }
    },
    created() {
        this.fetchContactContent()
    },
    methods: {
        async fetchContactContent(){
            const response = await axios.get('/wp-json/wp/v2/pages?slug=contact')

            this.allContactContent = response.data[0]
            this.loading = false
        }
    },
}
</script>

<style lang="scss" scoped>
    .content-container{
        max-width: 1360px;
        .page-content{
            h1{
                text-align: center;
                margin-bottom: 40px;
            }
            .contact-section{
                text-align: center;
                .cv-sect{
                    border-bottom: 1px solid #C8C0C0;
                    .button{
                        margin: 0 auto;
                    }
                }
                .social-sect{
                    padding-top: 30px;
                    .social-list{
                        justify-content: center;
                    }
                }
                .sect{
                    padding-bottom: 30px;
                    h2{
                        margin-bottom: 20px;
                    }
                }
            }
            .form-section{
                margin-top: 20px;
                border: 1px solid #C8C0C0;
                border-radius: 5px;
                padding: 20px 10px;
                h2{
                    margin-bottom: 20px;
                }
            }
        }
    }

    @media only screen and (min-width: 768px){
        .content-container{
            .page-content{
                .contact-section{
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    .cv-sect{
                        border-bottom: none;
                    }
                    .social-sect{
                        padding-top: 0px;
                    }
                }
                .form-section{
                    padding: 40px 30px;
                }
            }
        }
    }

    @media only screen and (min-width: 992px){
        .content-container{
            .page-content{
                display: grid;
                grid-template-columns: 1.5fr 1fr;
                grid-column-gap: 80px;
                h1{
                    margin-bottom: 60px;
                    grid-column: 1/3;
                }
                .contact-section{
                    grid-column: 2/3;
                    display: block;
                    text-align: left;
                    .cv-sect{
                        border-bottom: 1px solid #C8C0C0;
                    }
                    .social-sect{
                        padding-top: 50px;
                        .social-list{
                            justify-content: unset;
                        }
                    }
                    .sect{
                        padding-bottom: 50px;
                        h2{
                            margin-bottom: 30px;
                        }
                        .button{
                            margin: unset;
                            a{
                                span{
                                    text-align: center;
                                }
                            }
                        }
                    }
                }
                .form-section{
                    grid-row: 2/3;
                    margin-top: 0px;
                }
            }
        }
    }
</style>