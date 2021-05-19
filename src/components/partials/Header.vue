<template>
    <header class="content-container">
        <div class="mobile-menu" @click="toggleMobileMenu = !toggleMobileMenu" :class="{ transform: toggleMobileMenu }">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div class="navigation-container" :class="{ open: toggleMobileMenu }">
            <nav>
                <ul class="navigation-list">
                    <li class="nav-list-item" @click="toggleMobileMenu = !toggleMobileMenu">
                        <router-link to="/">Home</router-link>
                    </li>

                    <li class="nav-list-item" @click="toggleMobileMenu = !toggleMobileMenu">
                        <router-link to="/about">About Me</router-link>
                    </li>

                    <li class="nav-list-item" @click="toggleMobileMenu = !toggleMobileMenu">
                        <router-link to="/projects">Projects</router-link>
                    </li>

                    <li class="nav-list-item" @click="toggleMobileMenu = !toggleMobileMenu">
                        <a href="#" target="_blank">CV</a>
                    </li>

                    <li class="nav-list-item" @click="toggleMobileMenu = !toggleMobileMenu">
                        <router-link to="/contact">Contact</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            toggleMobileMenu: false,
            isMobile: false
        }
    },
    watch: {
        toggleMobileMenu: function() {
            if(this.toggleMobileMenu && this.isMobile){
                document.documentElement.style.overflowY = 'hidden'
                return
            }
            document.documentElement.style.overflowY = 'auto'
        }
    },
    methods: {
        getWindowWidth() {
            if(window.innerWidth < 768){
                this.isMobile = true
                return
            }
            this.isMobile = false
        }
    },
    mounted() {
        window.addEventListener('resize', this.getWindowWidth)
        window.addEventListener('load', this.getWindowWidth)
    },
    created() {
        this.getWindowWidth()
    }
}
</script>

<style lang="scss" scoped>
    header{
        padding-top: 15px;
        .mobile-menu{
            position: relative;
            height: 38px;
            width: 34px;
            margin-left: auto;
            z-index: 999;
            cursor: pointer;
            span{
                display: block;
                position: absolute;
                height: 1px;
                width: 34px;
                background: #1B1B1B;
                border-radius: 9px;
                opacity: 1;
                left: 0;
                right: 0;
                margin: auto;
                -webkit-transform: rotate(0deg);
                -moz-transform: rotate(0deg);
                -o-transform: rotate(0deg);
                transform: rotate(0deg);
                -webkit-transition: .25s ease-in-out;
                -moz-transition: .25s ease-in-out;
                -o-transition: .25s ease-in-out;
                transition: .25s ease-in-out;
                &:nth-child(1){
                    top: 4px;
                }
                &:nth-child(2), &:nth-child(3){
                    top: 20px;
                    width: 25px;
                    margin-right: 0;
                }
                &:nth-child(4){
                    top: 36px;
                }
            }
            &.transform{
                span{
                    &:nth-child(1){
                        top: 20px;
                        width: 0%;
                        left: 50%;
                    }
                    &:nth-child(2){
                        -webkit-transform: rotate(45deg);
                        -moz-transform: rotate(45deg);
                        -o-transform: rotate(45deg);
                        transform: rotate(45deg);
                        width: 34px;
                    }
                    &:nth-child(3){
                        -webkit-transform: rotate(-45deg);
                        -moz-transform: rotate(-45deg);
                        -o-transform: rotate(-45deg);
                        transform: rotate(-45deg);
                        width: 34px;
                    }
                    &:nth-child(4){
                        top: 20px;
                        width: 0%;
                        left: 50%;
                    }
                }
            }
        }
        .navigation-container{
            position: fixed;
            top: 0;
            left: -200vw;
            right: 0;
            margin: auto;
            height: 100vh;
            width: 100vw;
            background-color: #FFFFFF;
            transition: 0.5s all;
            z-index: 10;
            nav{
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                height: fit-content;
                width: fit-content;
                .navigation-list{
                    text-align: center;
                    display: grid;
                    grid-template-rows: repeat(5, 1fr);
                    grid-row-gap: 20px;
                    .nav-list-item{
                        a{
                            color: #5A5A5A;
                            font-size: 25px;
                            font-weight: 600;
                            &:hover{
                                color: #1B1B1B; 
                            }
                        }
                        .router-link-exact-active{
                            color: #1B1B1B;
                            font-weight: 800;
                        }
                    }
                }
            }
            &.open{
                left: 0;
            }
        }
    }

    @media only screen and (min-width: 768px){
        header{
            padding-top: 30px;
            .mobile-menu{
                display: none;
            }
            .navigation-container{
                position: relative;
                top: unset;
                left: unset;
                right: unset;
                bottom: unset;
                height: auto;
                width: auto;
                background-color: transparent;
                nav{
                    position: relative;
                    top: unset;
                    left: unset;
                    right: unset;
                    bottom: unset;
                    width: unset;
                    height: unset;
                    .navigation-list{
                        display: flex;
                        justify-content: flex-end;
                        .nav-list-item{
                            margin-left: 30px;
                            a{
                                font-size: 22px;
                            }
                        }
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 992px){
        header{
            .navigation-container{
                nav{
                    .navigation-list{
                        .nav-list-item{
                            margin-left: 50px;
                        }
                    }
                }
            }
        }
    }
</style>