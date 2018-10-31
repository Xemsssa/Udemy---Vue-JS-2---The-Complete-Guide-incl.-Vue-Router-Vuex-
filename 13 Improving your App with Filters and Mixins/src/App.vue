<template>
    <div>
       <h1>Filter and Mixins</h1>

       <p>{{text1 | toUppercase}}</p>
       <p>{{text2 | toLowercase}}</p>

       <input v-model=filterFruits>
       <!-- {{filterFruits}} -->

       <ul>
           <li v-for="fruit in filter" :key="fruit">{{fruit}}</li>
       </ul>

       <hr>

        

        <list-vue/>
    </div>
</template>

<script>
import ListVue from './List.vue';
// import {fruitMixin} from './fruitMixin.js';

export default {
    // mixins:[fruitMixin],

    data() {
        return {
            text1: "make me uppercase",
            text2: "make me lowercase",

            listOfFruits: ['apple', 'mango', 'banaba'],
            filterFruits: ""
        }
    },

    filters: {
        toUppercase(val) {
            return val.toUpperCase();
        }
    },

    computed: {
        filter() {
            return this.listOfFruits.filter((el)=> {
                return el.match(this.filterFruits);
            });
        }
    },

    components: {
        ListVue
    }
}
</script>
