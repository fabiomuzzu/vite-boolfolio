<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import {store} from './store.js';
import axios from 'axios';

export default {
  data() {
        return {
            store,
            projects: [],
        }
    },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  }
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
