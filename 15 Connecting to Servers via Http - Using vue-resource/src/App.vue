<template>
    <div class="container ">
        <div class="row">
            <div class="col-md-12">
                <h1 class="text-center">Http</h1>
                <form>
                    <div class="form-group">
                        <label for="userName">UserName</label>
                        <input type="text" class="form-control" id="userName" v-model="user.userName">
                    </div>

                    <div class="form-group">
                        <label for="userEmail">Email</label>
                        <input type="email" class="form-control" id="userEmail" v-model="user.userEmail">
                    </div>

                    <div class="form-group">
                        <button class="btn btn-primary" @click.prevent=submit>Submit</button> 
                    </div>

                    <!-- {{user}} -->

                    <hr>

                    <input type="text" v-model=node>
                    <!-- {{this.node}} -->
                    <button class="btn btn-primary" @click.prevent="getData">Get data</button>

                    <ul class="list-group">
                        <li class="list-group-item" v-for="(user, index) in users" :key="index">
                            The name is: {{user.userName}} and the pass is: {{user.userEmail}}
                        </li>
                    </ul>
                    <!-- {{users}} -->
                </form>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                userName: '',
                userEmail: ''
            },

            users: [],
            resource: {},
            node: 'data'
        }
    },

    methods: {
        submit() {
            // send to base user data
            // console.log(this.user);

            // this.$http.post('data.json', this.user)
            // .then (response => {
            //     console.log(response);
            // },error => {console.log(error);});

            // this.resource.save({}, this.user);
            this.resource.saveAlt(this.user);
        },

        getData() {
            // this.$http.get('alternative.json')
            // .then(response => {
            //     // const data = response.json();
            //     // console.log(data);
            //     return response.json();
            // })
            // .then(data => {
            //     // console.log(data)
            //     const result = [];
            //     for (let i in data) {
            //         result.push(data[i]);
            //     }

            //     console.log(result);
            //     this.users = result;
            // });
            this.resource.get({node: this.node})
            .then(response => {
                // const data = response.json();
                // console.log(data);
                return response.json();
            })
            .then(data => {
                // console.log(data)
                const result = [];
                for (let i in data) {
                    result.push(data[i]);
                }

                // console.log(result);
                this.users = result;
            });
        }
    },

    created() {
        const customActions = {
            saveAlt: {method: 'POST', url: "data.json"},
            get: {method: 'GET'}
        }
        // console.log("created " + this.$resource('data.json'));
        // this.resource = this.$resource('data.json');
        this.resource = this.$resource('{node}.json', {}, customActions);


        // console.log("resource " + this.resource);

    }

}
</script>

<style>

</style>
