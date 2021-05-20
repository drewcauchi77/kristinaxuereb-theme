<template>
    <div class="content-container">
        <div class="page-content padding-sect">
            <h1>404</h1>
            <i class="fas fa-robot"></i>
            <h2>Nothing has been found here!</h2>

            <div class="button">
                <router-link to="/projects">
                    <span>Visit Portfolio</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style lang="scss" scoped>
    .content-container{
        .page-content{
            h1, h2{
                text-align: center;
                margin-bottom: 30px;
            }
            h1{
                font-size: 50px;
            }
            svg{
                text-align: center;
                font-size: 85px;
                color: #1B1B1B;
                margin: 0 auto;
                display: block;
                padding-bottom: 30px;
            }
            .button{
                margin: 0 auto;
                a{
                    span{
                        text-align: center;
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 768px){
        .content-container{
            .page-content{
                h1, h2{
                    margin-bottom: 40px;
                }
                svg{
                    padding-bottom: 40px;
                }
            }
        }
    }
</style>