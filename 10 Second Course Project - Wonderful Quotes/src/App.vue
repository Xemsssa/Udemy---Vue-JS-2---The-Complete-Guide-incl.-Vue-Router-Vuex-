<template>
    <div class="container">
        <header-vue :max-quote-count="maxQuoteCount" :quote-length="quoteList.length" />
        <!-- {{quoteList.length}} -->
        <quote-vue @addQuote="pushQuote" />
        <show-quote-vue :quote-list="quoteList" @delQuote="delQuote">
            
        </show-quote-vue>
        <Footer/>
    </div>
</template>

<script>
    import Footer from './components/footer/Footer.vue';
    import Header from './components/header/Header.vue';
    import Quote from './components/quote/Quote.vue';
    import ShowQuote from './components/showQuote/ShowQuote.vue';

    export default {
        data() {
            return{
                quoteList: ['test', 'test2'],
                maxQuoteCount: 10
            }
        },

        components: {
            'header-vue': Header,
            'quote-vue': Quote,
            'show-quote-vue': ShowQuote,
            Footer
        },

        methods: {
            pushQuote(quote) {
                this.quoteList.push(quote);
            },

            delQuote(index) {
                this.quoteList.splice(index, 1);
            }
        }
    }
</script>

<style>
    .container {
        max-width: 1140px;
        margin: 0 auto;
    }
</style>
