<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'ShowProject',
    data() {
        return {
            store,
            project: [],
            name: 'projects',
        }
    },

    created() {
        this.getProject()
    },

    methods: {
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

    <div class="container-lg">
        <div class="row">
            <div class="col-12 d-flex justify-content-center my-5">
                <div class="card w-50 " style="width: 18rem;">
                    <img :src="project.img.includes('https') ? project.img : `${this.store.apiImg}${project.img}`" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{project.name}}</h5>
                        <p class="card-text">{{ project.description }}</p>
                    </div>
                    <div class="m-2">
                        <div v-if="project.technologies.length > 0">
                            <div class="badge text-bg-success rounded-pill mx-1"
                                v-for="(technology, index) in project.technologies" :key="index">
                                {{ technology.name }}
                            </div>
                        </div>
                        <div v-else>
                            <span class="fs-small">There are no technologies</span>
                        </div>
                    </div>
                    <div class="m-3">
                        <div v-if="project.type">
                            Type: {{ project.type.name }}
                        </div>
                        <div v-else>
                            Without type
                        </div>
                    </div>
                    <div class="m-3">
                        <p>
                            Start Project:
                            {{ project.date_start }}
                        </p>
                        <p>
                            End Project: <span v-if="project.date_end != null">{{ project.date_end }} </span>
                            <span v-else>In progress...</span>
                        </p>
                    </div>
                    <div class="m-3">
                        <a :href="project.repository_link">Link Repository</a>
                    </div>
                </div>
            </div>
            <div class="col-12 d-flex justify-content-center mb-5 -5">
                <router-link class="btn btn-primary" :to="{ name: 'projects'}" >
                    Go back
                </router-link>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>