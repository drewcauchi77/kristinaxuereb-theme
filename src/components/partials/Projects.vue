<template>
  <div class="projects-list" v-if="!loading">
        <div class="single-project" v-for="project in allProjects" :key="project.id">
            <router-link :to="'/projects/' + project.slug">
                <div class="single-info">
                    <img :src="project.acf.featured_image.url" :alt="project.title.rendered">

                    <div class="single-project-details">
                        <div class="single-project-mini-details">
                            <span class="date">{{ project.formatted_date }}</span>

                            <div class="reading-time">
                                <i class="far fa-clock"></i>
                                <span class="read">{{ project.acf.reading_time }} min read</span>
                            </div>
                        </div>

                        <h3 v-html="project.title.rendered"></h3>
                        <div class="excerpt" v-html="project.excerpt.rendered"></div>
                    </div>
                </div>
            </router-link>
        </div>
  </div>

  <Loading v-else />
</template>

<script>
import axios from 'axios'
import Loading from '../partials/Loading'

export default {
    name: 'Projects',
    components: {
        Loading
    },
    data() {
        return {
            loading: true,
            allProjects: []
        }
    },
    created() {
        this.fetchProjects()
    },
    methods: {
        async fetchProjects(){
            const response = await axios.get('/wp-json/wp/v2/posts')

            this.allProjects = response.data
            this.loading = false
        }
    }
}
</script>

<style lang="scss" scoped>
    .projects-list{
        .single-project{
            border-radius: 8px;
            box-shadow: 10px 10px 10px 10px rgba(27, 27, 27, 0.1);
            margin-bottom: 20px;
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
            transition: 0.5s all;
            background-color: #FFFFFF;
            a{
                .single-info{
                    padding: 20px;
                    img{
                        width: 100%;
                        border-radius: 8px;
                    }
                    .single-project-details{
                        padding-top: 10px;
                        .single-project-mini-details{
                            display: grid;
                            grid-template-columns: repeat(2, 1fr);
                            padding-bottom: 10px;
                            .date{
                                color: #5A5A5A;
                            }
                            .reading-time{
                                justify-self: end;
                                color: #5A5A5A;
                                .read{
                                    color: #5A5A5A;
                                }
                            }
                        }
                        h3{
                            padding-bottom: 10px;
                        }
                    }
                }
            }
            &:hover{
                transform: scale(1.1);
            }
        }
    }

    @media only screen and (min-width: 768px){
        .projects-list{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-row-gap: 20px;
            grid-column-gap: 20px;
            .single-project{
                margin-bottom: 0;
            }
        }
    }

    @media only screen and (min-width: 992px){
        .projects-list{
            grid-template-columns: repeat(3, 1fr);
            grid-row-gap: 40px;
            grid-column-gap: 40px;
            max-width: 1200px;
            margin: 0 auto;
        }
    }
</style>