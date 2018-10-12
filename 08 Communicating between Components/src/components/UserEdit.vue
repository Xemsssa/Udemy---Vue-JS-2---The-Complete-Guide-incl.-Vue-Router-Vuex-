<template>
    <div class="userEdit components">
        <h4>you may Edit user detail here</h4>
        <p>Edit</p>
        <p>Your age: {{age}}</p>
        <button @click="editAge">Edit Age</button>
        <button @click=setAge>Set Age</button>
         <button @click=busAge>bus Age</button>
    </div>
</template>

<script>
import {eventBus} from '../main.js';

export default {
    // props: ['age'],
    props: {
        age: Number,
        setAge: Function
    },

    methods: {
        editAge() {
            this.age = 32;
            // this.$emit("updAge", 32);
        },

        busAge() {
            this.age = 32;
            // this.$emit("updAge", 32);
            // console.log("bus load " + this.age);
            // eventBus.$emit('busAge', 32);
            // console.log("bus send");
            eventBus.changeAge(32);
        }
    }
}
</script>

<style scoped>
    .userEdit {
        background-color: lightgreen;
    }
</style>
