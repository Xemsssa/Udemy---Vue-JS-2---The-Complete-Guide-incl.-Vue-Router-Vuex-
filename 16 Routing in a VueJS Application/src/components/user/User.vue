<template>
    <div>
        <h1>User</h1>
        <hr>
        <!-- <p>User Id: {{this.id}} </p> -->
        <button class="btn btn-primary" @click=backToHome>Back to home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default{
        // data() {
        //     return {
        //         id: this.$route.params.id
        //     }
        // },
        // watch: {
        //     '$route'(to, from) {
        //         this.id = to.params.id;
        //     }
        // },
        
        methods: {
            backToHome() {
                // this.$router.push('/');
                this.$router.push({name: 'home'});
            }
        }
    }
</script>