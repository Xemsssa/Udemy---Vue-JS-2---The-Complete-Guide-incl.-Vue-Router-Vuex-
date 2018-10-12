<template>
    <div class="userDetail components">
        <h4>you may Check user detail here</h4>
        <p>More detail</p>
        <p>User name: {{name}}</p>
        <p>Reversed: {{ reverse()}}</p> 
        <!-- <button @click="resetName">reset name</button> -->
        <button @click=resetFn()>reset name</button>

        <p>Your age: {{age}}</p>
    </div>  
</template>

<script>
import { eventBus } from '../main.js';

export default {
//    props: ['name'],
    props: {
        // name: [String, Array]
        // namel: String
        name: {
            type: String,
            required: true
            // default: "Your Name"
        },
        age: Number,
        resetFn: Function
    },
    //     // name: {
    //     //     type: Object,
    //     //     type: Array,
    //     //     // required: true
    //     //     default: () => {
    //     //         return {
    //     //             name: 'Default'
    //     //         }
    //     //     }
    //     // }
    // },

    methods: {
        reverse() {
            return this.name.split("").reverse().join("");
        },

        resetName() {
            this.name = '';
            // this.$emit("resetName", this.name);
            // eventBus.$emit("resetName", this.name);
        },
   },

   created() {
        // console.log("created");
    //    console.log(eventBus);

        eventBus.$on('busAge', (age) =>{
            // console.log("recive");
            // console.log(age);
            this.age = age;
        });
    }
}
</script>

<style scoped>
    .components {
        background-color: rosybrown;
        border: 1px solid #000;
    }
</style>
