<script>
export default {
    name: 'AppHeader',
    
    data() {
        return {
            navLinks: [
                {
                    name: 'home',
                    label: 'Home',
                },
                {
                    name: 'projects',
                    label: 'Projects',
                },
                {
                    name: 'contact-us',
                    label: 'Contact Us',
                },
            ],
        };
    },
}
</script>

<template lang="">

    <div class="hr_bg">
        <div class="container">
            <div class="row">
                <div class="hr_col d-flex align-items-center justify-content-between">
                    <div class="col-6">
                        <h3>Logo</h3>
                    </div>
                    <div class="col-6">
                        <ul class="list-unstyled d-flex m-0 justify-content-end">
                            <li class="px-3" v-for="link, index in navLinks">
                                <router-link class="text-decoration-none text-dark" :to="{ name: link.name }">{{ link.label }}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

.hr_bg{
    background-image: linear-gradient(90deg, #885DF1 0%, #F65282 100%);
    
    .hr_col{
        width: 100%;
        height: 80px;
    }
}

</style>