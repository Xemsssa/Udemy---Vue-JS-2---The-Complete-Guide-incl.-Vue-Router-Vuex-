<template>
    <div>
        <h1>User Detail</h1>
        <p>The user id id: {{$route.params.id}}</p>

        <!-- <router-link tag="button" :to="'/user/' + $route.params.id + '/edit'" class="btn btn-primary">Edit user</router-link> -->
        <router-link tag="button" :to="link" class="btn btn-primary">Edit user</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: {
                    name: 'userEdit',
                    params: {
                        id: this.$route.params.id
                    }, 
                    query: {
                        locale: 'en',
                        q: 100
                    },
                    // hash: 'data'
                } 
            }
        },
        beforeRouteEnter (to, from, next) {
            if (true) {
               next(); 
            } else {
                next(false);
            }
            
            // next(vm => {
            //     vm.link;
            // });

            // next();
        }
    }
</script>