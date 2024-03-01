<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import ProjectCard from './components/ProjectCard.vue';
import AppFooter from './components/AppFooter.vue';
import {store} from './store.js';
import axios from 'axios';

export default {
  name: 'Projects',
  data() {
        return {
            store,
            projects: [],
        }
    },

  components: {
    AppHeader,
    AppMain,
    ProjectCard,
    AppFooter,
  },
  
  created(){
    this.getProjects();
  },
  
  methods: {
    getProjects(){
      axios.get(this.store.apiUrl).then((response) =>{
        this.projects = response.data
        console.log(this.projects);
      })
    }
  },
}
</script>

<template>

<AppHeader/>
<AppMain/>
<AppFooter/>

</template>

<style scoped lang="scss">
@use './style/generals.scss' as *;
@use './style/partials/variables' as *;
</style>
