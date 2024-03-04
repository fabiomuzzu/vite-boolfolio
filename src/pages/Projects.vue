<script>
import ProjectCard from '../components/ProjectCard.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
  name: "Projects",
    data() {
        return {
            store,
            projects: [],
        }
    },

    components: {
        ProjectCard,
    },
    
    created(){
        this.getProjects();
    },

    methods: {
        getProjects(){
        axios.get(this.store.apiUrl).then((response) =>{
            this.projects = response.data.results;
            console.log(this.projects);
        })
        }
    },
  
};
</script>

<template lang="">
  <div> 
    <div class="container">
        <div class="row">
            <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
        </div>
    </div>  
  </div>
</template>

<style lang="scss" scoped>

</style>