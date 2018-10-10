<template>
    <div>
        <p>Server Status: {{status}}</p>
        <hr>
        <button @click='changeStatus'>Change Status</button>
    </div>
</template>

<script>
    export default {
        data() {
      return {
        status: "Normal"
      }
    },

    methods: {
      changeStatus() {
        this.status = "Critical"
      }
    }
    }
</script>

<style>

</style>
