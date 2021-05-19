<template>
    <main class="page-content" :id="this.$route.name+'-container'">
        <div class="container">
            <div class="content">
                <Header />
                <router-view></router-view>
            </div>
        </div>
        <Footer />

        <div class="background-particles" v-if="this.$route.name == 'Home'">
            <vue-particles color="#1B1B1B" linesColor="#5A5A5A"></vue-particles>
        </div>
    </main>
</template>

<script>
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'

export default {
    components: {
        Header,
        Footer
    }
}
</script>

<style lang="scss" scoped>
    #Home-container{
        position: relative;
        .container{
            background-color: rgba(153, 184, 205, 0.4);
            .content{
                height: calc(100vh - 20px);
                position: relative;
            }
        }
        .background-particles{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            height: 100%;
            #particles-js{
                height: 100%;
            }
        }
    }

    @media only screen and (min-width: 768px){
        #Home-container{
            .container{
                .content{
                    height: calc(100vh - 50px);
                }
            }
        }
    }
</style>