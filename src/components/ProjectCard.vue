<script>
import { store } from '../store.js';

export default {
    name: 'ProjectCard',
    data() {
        return {
            store,
        }
    },
    props: {
        project: Object,
    },
    
    methods: {
        getImg(){
            let img;
            let imgApi = this.project.img;
            if (this.project.img != null) {
                if (imgApi.includes("https")) {
                    img = this.project.img;
                } else {
                    img = this.store.apiImg + imgApi;
                }
            }
            return img;
        }
    },
}
</script>

<template lang="">

    <div class="container">
        <div class="row">
            <div class="col-3 d-flex my-4">
                <div class="card">
                    <img :src="getImg()" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{project.name}}</h5>
                        <p class="card-text">{{project.description}}</p>
                        <div class="text-end ">
                            <a href="#" class="btn btn-primary">Show More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>