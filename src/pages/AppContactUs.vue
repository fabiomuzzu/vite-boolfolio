<script>
import axios from 'axios';
import {store} from '../store.js';

export default {
    name: 'ContactUs',
    data() {
        return {
            
        }
    },
}
</script>

<template lang="">

    <div class="container">
        <form @submit.prevent="sendForm()" method="POST">
            <div class="row">
                <div class="col-6">
                    <label class="form-label" for="name">Name</label>
                    <input type="text">
                </div>
                <div class="col-6">
                    <label class="form-label" for="surname">Surname</label>
                    <input type="text">
                </div>
                <div class="col-6">
                    <label class="form-label" for="email">Email</label>
                    <input type="text">
                </div>
                <div class="col-6">
                    <label class="form-label" for="description">Description</label>
                    <input type="text">
                </div>
                <div class="col-12">
                    
                </div>
            </div>
        </form>
    </div>

</template>

<style lang="scss" scoped>
    
</style>