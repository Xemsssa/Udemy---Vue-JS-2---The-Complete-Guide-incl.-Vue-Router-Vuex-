<template>
    <div>
       <input v-model=filterFruits>
       <!-- {{filterFruits}} -->

       <ul>
           <li v-for="fruit in filter" :key="fruit">{{fruit}}</li>
       </ul>

    </div>
</template>

<script>

// import {fruitMixin} from './fruitMixin.js';

export default {
    // mixins: [fruitMixin],
    data() {
        return {
          
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

    created() {
        console.log("inside list");
    }
}
</script>
