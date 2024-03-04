<script>
import AppHeader from './components/AppHeader.vue';
import ProjectCard from './components/ProjectCard.vue';
import AppFooter from './components/AppFooter.vue';
import {store} from './store.js';
import axios from 'axios';

export default {
  name: 'Projects',
  data() {
        return {
            store,
        }
    },

  components: {
    AppHeader,
    AppFooter,
  },
  
  
}
</script>

<template>

<AppHeader />
<router-view></router-view>
<AppFooter />

</template>

<style scoped lang="scss">
@use './style/generals.scss' as *;
@use './style/partials/variables' as *;
</style>
