<template>
    <div>
        <h4>Quote</h4>
        <textarea name="quote" id="quote" cols="50" rows="5" v-model="quote"></textarea>
        <!-- {{quote}} -->
        <button @click="addQuote">Add Quote</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quote: ''
        }
    },

    props: [
        'quoteList'
        // addQuote Function
    ],

    methods: {
        addQuote() {
            // quoteList.push(this.quote);
            this.$emit('addQuote', this.quote);
        }
    }
}
</script>

<style>

</style>
