<template>
  <div class="projects-list" v-if="!loading">
      <div class="single-project" v-for="project in allProjects" :key="project.id">
            <router-link :to="'/projects/' + project.slug">
                <h3 v-html="project.title.rendered"></h3>
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

<style>

</style>