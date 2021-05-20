<template>
  <div class="social-list">
        <div class="social-item">
            <a href="https://www.facebook.com/kristina.xuereb.1" target="_blank">
                <i class="fab fa-facebook-f"></i>
            </a>
        </div>

        <div class="social-item">
            <a href="https://github.com/kristinaxuereb" target="_blank">
                <i class="fab fa-github"></i>
            </a>
        </div>

        <div class="social-item">
            <a href="https://www.linkedin.com/in/kristina-xuereb-60229715b/" target="_blank">
                <i class="fab fa-linkedin-in"></i>
            </a>
        </div>

        <div class="social-item">
            <a href="mailto:me@kristinaxuereb.com" target="_blank">
                <i class="fas fa-envelope"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Socials'
}
</script>

<style lang="scss" scoped>
    .social-list{
        display: grid;
        grid-template-columns: repeat(4, 45px);
        height: 45px;
        grid-column-gap: 15px;
        margin: 0 auto;
        .social-item{
            border-radius: 50%;
            background-color: #1B1B1B;
            border: 2px solid #1B1B1B;
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
                background-color: transparent;
                a{
                    svg{
                        color: #1B1B1B;
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 768px){
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
</style>