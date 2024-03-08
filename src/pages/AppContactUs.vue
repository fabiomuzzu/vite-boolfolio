<script>
import axios from 'axios';
import {store} from '../store.js';

export default {
    name: 'ContactUs',
    data() {
        return {
            store,
            name: '',
            surname: '',
            email: '',
            description: '',
            success: '',
            errors: '',
            loading: false,
        }
    },
    methods: {
        sendForm(){
            this.loading = true;
            const data ={
                name: this.name,
                surname: this.surname,
                email: this.email,
                description: this.description,
            }

            axios.post(`${this.store.apiUrl}/api/contact-us`, data).then((response) => {
                this.success = response.data.success;

                if (response.data.success) {
                    this.name = '';
                    this.surname = '';
                    this.email = '';
                    this.description = '';

                    this.$router.push({
                        name: 'thanks-you',
                    });
                }
                else{
                    this.errors = response.data.errors
                }
                this.loading = false;
            });
        }

        
    }
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
                    <input :class="errors && errors.name ? 'is-invalid' : ''" type="text" class="form-control" name="name" id="name" v-model="name" >
                    <div v-for="(error, index) in errors.name" :key="`message-error-${index}`" class="invalid-feedback" >
                        {{error}}
                    </div>
                </div>
                <div class="col-12 my-1">
                    <label class="form-label" for="surname">Surname</label>
                    <input :class="errors && errors.surname ? 'is-invalid' : ''" class="form-control" type="text" name="surname" id="surname" v-model="surname" >
                    <div v-for="(error, index) in errors.surname" :key="`message-error-${index}`" class="invalid-feedback" >
                        {{error}}
                    </div>
                </div>
                <div class="col-12 my-1">
                    <label class="form-label" for="email">Email</label>
                    <input :class="errors && errors.email ? 'is-invalid' : ''" class="form-control" type="email" name="email" id="email" v-model="email" >
                    <div v-for="(error, index) in errors.email" :key="`message-error-${index}`" class="invalid-feedback" >
                        {{error}}
                    </div>
                </div>
                <div class="col-12 my-1">
                    <label class="form-label" for="description">Description</label>
                    <textarea :class="errors && errors.description ? 'is-invalid' : ''" class="form-control" name="description" id="description" cols="30" rows="10" v-model="description" placeholder="Leave a comment here..."></textarea>
                    <div v-for="(error, index) in errors.description" :key="`message-error-${index}`" class="invalid-feedback" >
                        {{error}}
                    </div>
                </div>
                <div class="col-12 my-3 d-flex justify-content-center "> 
                    <button class="btn btn-primary text-white" :disabled="loading" type="submit">{{ loading ? 'Sending...' : 'Send' }}</button>
                </div>
            </div>
        </form>
    </div>

</template>

<style lang="scss" scoped>

</style>