<template>
  <div class="content-container" v-if="!loading">
      <div class="page-content padding-sect">
        <h1 v-html="singleProject.title.rendered"></h1>

        <div class="post-content" v-html="singleProject.content.rendered"></div>
      </div>
  </div>

  <Loading v-else />
</template>

<script>
import axios from 'axios'
import Loading from '../partials/Loading'

export default {
    name: 'SinglePost',
    components: {
        Loading
    },
    data() {
        return {
            loading: true,
            singleProject: [] 
        }
    },
    created() {
        this.fetchProject()
    },
    methods: {
        async fetchProject() {
            const response = await axios.get('/wp-json/wp/v2/posts?slug=' + this.$route.params.slug)

            this.singleProject = response.data[0]
            this.loading = false
        }
    }
}
</script>

<style lang="scss" scoped>
    .content-container{
        max-width: 950px;
        .page-content{
            h1{
                padding-bottom: 30px;
            }
        }
    }

    @media only screen and (min-width: 992px){
        .content-container{
            .page-content{
                h1{
                    padding-bottom: 50px;
                }
            }
        }
    }
</style>