<template>
    <div>
        <h1>Quotes Added</h1>
        <p> {{quoteLength}} /{{maxQuoteCount}}</p> 
    </div>    
</template>

<script>
export default {
    props: ['max-quote-count', 'quote-length']
}
</script>

<style>

</style>
