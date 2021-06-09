<template>
    <footer v-if="this.$route.name != 'Home'" class="footer-container padding-sect">
        <div class="content-container">
            <img src="/wp-content/themes/zuus-vuejs-wp-theme-boilerplate/dist/assets/footer-site-logo.png">

            <nav>
                <ul class="navigation-list">
                    <li class="nav-list-item">
                        <router-link to="/">Home</router-link>
                    </li>

                    <li class="nav-list-item">
                        <router-link to="/about">About Me</router-link>
                    </li>

                    <li class="nav-list-item">
                        <router-link to="/projects">Projects</router-link>
                    </li>

                    <li class="nav-list-item">
                        <router-link to="/contact">Contact</router-link>
                    </li>

                    <li class="nav-list-item">
                        <a href="/wp-content/themes/zuus-vuejs-wp-theme-boilerplate/dist/assets/resume.pdf" target="_blank">CV</a>
                    </li>
                </ul>
            </nav>

            <Socials />

            <span class="rights">&copy; {{ new Date().getFullYear() }} Kristina Xuereb, All Rights Reserved</span>
        </div>
    </footer>
</template>

<script>
import Socials from './Socials'

export default {
    name: 'Footer',
    components: {
        Socials
    }
}
</script>

<style lang="scss" scoped>
    .footer-container{
        background-color: rgba(153, 184, 205, 0.4);
        .content-container{
            img{
                height: 70px;
                margin: 0 auto;
                display: block;
                margin-bottom: 40px;
            }
            nav{
                margin: 0 auto;
                text-align: center;
                .navigation-list{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-evenly;
                    justify-content: center;
                    width: 60%;
                    margin: 0 auto;
                    .nav-list-item{
                        width: 50%;
                        margin-bottom: 20px;
                        a{
                            &:hover{
                                color: #1B1B1B; 
                            }
                        }
                        .router-link-exact-active{
                            font-weight: 700;
                        }
                    }
                }
            }
            .social-list{
                justify-content: center;
                margin-top: 20px;
                .social-item{
                    background-color: #2C2828;
                }
            }
            span{
                font-size: 15px;
                margin-top: 40px;
                text-align: center;
                display: block;
            }
        }
    }

    @media only screen and (min-width: 552px){
        .footer-container{
            .content-container{
                nav{
                    .navigation-list{
                        width: 450px;
                        .nav-list-item{
                            width: auto;
                            margin: 0px 15px;
                        }
                    }
                }
                .social-list{
                    margin-top: 40px;
                }
            }
        }
    }

    @media only screen and (min-width: 768px){
        .footer-container{
            .content-container{
                img{
                    height: 90px;
                }
                nav{
                    .navigation-list{
                        width: 550px;
                        .nav-list-item{
                            font-size: 20px;
                            a{
                                &:hover{
                                    color: #1B1B1B; 
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>