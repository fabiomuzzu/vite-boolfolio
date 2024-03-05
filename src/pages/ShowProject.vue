<script>
import { store } from '../store.js';
import axios from 'axios';

    export default {
        name: 'ShowProject',
        data() {
            return {
                store,
                project: [],
            }
        },

        created() {
            this.getProject()
        },

        methods:{
            getProject() {
                console.log(this.$route.params.slug);
                axios.get(`${this.store.apiUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
                    this.project = response.data.results;
                })
            }
        }
    }
</script>

<template lang="">
    <div>
        <h1>{{ project.name }}</h1>
    </div>
</template>

<style lang="scss" scoped>
    
</style>