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
        <div class="row">
            <div class="col-12 my-5">
                <h2 class="text-center">Contact Us</h2>
            </div>
        </div>
        <form @submit.prevent="sendForm()" method="POST">
            <div class="row">
                <div class="col-12 my-1">
                    <label class="form-label" for="name">Name</label>
                    <input type="text" class="form-control" name="name" id="name" v-model="name" required>
                </div>
                <div class="col-12 my-1">
                    <label class="form-label" for="surname">Surname</label>
                    <input class="form-control" type="text" name="surname" id="surname" v-model="surname" required>
                </div>
                <div class="col-12 my-1">
                    <label class="form-label" for="email">Email</label>
                    <input class="form-control" type="email" name="email" id="email" v-model="email" required>
                </div>
                <div class="col-12 my-1">
                    <label class="form-label" for="description">Description</label>
                    <textarea class="form-control" name="description" id="description" cols="30" rows="10" v-model="description" placeholder="Leave a comment here..."></textarea>
                </div>
                <div class="col-12 my-3 d-flex justify-content-center ">
                    <button class="btn btn-primary" type="submit">Send</button>
                </div>
            </div>
        </form>
    </div>


</template>

<style lang="scss" scoped>



</style>