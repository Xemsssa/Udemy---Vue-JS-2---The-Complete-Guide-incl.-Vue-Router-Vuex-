<template>
    <div class="row">
       <el-vue v-for="(quote, index) in quoteList" :key="index" >
           <p  @click="delQuote(index)">{{quote}}</p>
       </el-vue>
    </div>
</template>

<script>
import El from './El.vue';

export default {
    props: ['quoteList'],
    // data() {
    //     return{
    //         props
    //     }
    // }
    components: {
        'elVue':El
    },

    methods: {
        delQoute(index) {
            console.log('clicked');
            // quoteList.splice(index, 1);
            // this.$emit("delQuote", index);
        }
    }
}
</script>

<style>

</style>
