<template>
    <div class="components">
        <h1>User Component</h1>
        <p>New user</p>
        <p>Age: {{age}}</p>
        <!-- <input type="text" :name=""> -->
        <button @click="changeName">Change name</button> 
        
        <!-- <hr> -->
        <hr>
        <div class="row">
            <div class="col-md-6">
                <user-detail-vue
                    :name=name
                    @resetName="name = $event"
                    :resetFn=resetName
                    :age=age></user-detail-vue>
            </div>
            <div class="col-md-6">
                <user-edit-vue
                    :age=age
                    :setAge=setAge
                />
            </div>
        </div>

        

    </div>
</template>

<script>
import UserDetailVue from './UserDetail.vue';
import UserEditVue from './UserEdit.vue';


export default {
    data() {
        return {
            name: "",
            age: 28
        }
    },

    components: {
        UserDetailVue,
        UserEditVue
    },

    methods: {
        changeName(){
            this.name = "Andrzej";
        },

        resetName(){
            this.name = "";
        },
        setAge() {
            this.age = "32";
        }
    }
}

</script>

<style>
    .components {
        background-color: cadetblue;
    }
</style>