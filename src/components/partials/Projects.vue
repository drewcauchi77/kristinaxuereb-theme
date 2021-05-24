<template>

    <div class="projects-container" v-if="!loading">
        <div class="categories-list">
            <div class="single-category" @click="fetchProjects(); selectedCategory = 0" :class="{ active: selectedCategory == 0 }">
                <span>All</span>
            </div>

            <div class="single-category" 
                v-for="category in allCategories" 
                :key="category.id" 
                @click="getProjectsUnderCategory(category.id); 
                    selectedCategory = category.id"
                :class="{ active: selectedCategory == category.id }">
                <span v-if="category.count > 0">{{ category.name }}</span>
            </div>
        </div>

        <div class="projects-list">
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
            allProjects: [],
            allCategories: [],
            selectedCategory: 0
        }
    },
    created() {
        this.fetchCategories(),
        this.fetchProjects()
    },
    methods: {
        async fetchProjects() {
            const response = await axios.get('/wp-json/wp/v2/posts')

            this.allProjects = response.data
            this.loading = false
        },
        async fetchCategories() {
            const response = await axios.get('/wp-json/wp/v2/categories')

            for(var i = 0; i < response.data.length; i++){
                if(response.data[i].count > 0){
                    this.allCategories.push(response.data[i])
                }
            }
        },
        async getProjectsUnderCategory(categoryID) {
            const response = await axios.get('/wp-json/wp/v2/posts?categories=' + categoryID)
            
            this.allProjects = response.data
        }
    }
}
</script>

<style lang="scss" scoped>
    .projects-container{
        .categories-list{
            padding-bottom: 30px;
            .single-category{
                display: inline-block;
                padding:  8px 15px;
                margin: 0px 10px 10px 0px;
                background-color: #F4F4F4;
                border: 1px solid #F4F4F4;
                transition: 0.5s all;
                border-radius: 50px;
                cursor: pointer;
                &:hover{
                    background-color: transparent;
                    border: 1px solid #1B1B1B;
                }
                &.active{
                    background-color: #1B1B1B;
                    border-color: #1B1B1B;
                    span{
                        color: #F4F4F4;
                    }
                }
            }
        }
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
    }

    @media only screen and (min-width: 768px){
        .projects-container{
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
    }

    @media only screen and (min-width: 992px){
        .projects-container{
            max-width: 1200px;
            margin: 0 auto;
            .categories-list{
                padding-bottom: 50px;
            }
            .projects-list{
                grid-template-columns: repeat(3, 1fr);
                grid-row-gap: 40px;
                grid-column-gap: 40px;
            }
        }
    }
</style>