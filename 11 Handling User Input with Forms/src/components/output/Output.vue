<template>
    <div class="output">
        <h3 class="outputHeader">Your Data</h3>

        <p>Mail: {{email}}</p>
        <p>Password: </p>
        <p>Age: </p>
        <p>Message: /<p>
        <p>Send Mail? </p>
        <p>Gender:</p>
        <p>Priorioty:</p>
    </div>    
</template>

<script>
export default {
    props:['email']
}
</script>

<style scoped>
    .output{
        border: 1px solid gray;
    }
</style>
