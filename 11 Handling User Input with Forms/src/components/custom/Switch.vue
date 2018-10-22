<template>
    <div>
        <!-- <div id="on" @click="isOn = true" :class="{active: isOn}">On</div>

        <div id="off" @click="isOn = false" :class="{active: !isOn}">Off</div> -->

        <!-- <div id="on" @click="value = true" :class="{active: value}">On</div>

        <div id="off" @click="value = false" :class="{active: !value}">Off</div> -->

        <div id="on" @click="switched(true)" :class="{active: value}">On</div>

        <div id="off" @click="switched(false)" :class="{active: !value}">Off</div>
        <!-- {{value}} -->
    </div>
</template>

<script>
export default {
    // data() {
    //     return{
    //         isOn: false
    //     }
    // }

    props: ['value'],

    methods: {
        switched(swichedValue) {
            this.$emit("input", swichedValue);
        }
    }
}
</script>

<style scoped>
    #on, #off {
        width: 40px;
        height: 20px;
        background-color: lightgray;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }

    #on:hover, #on:active {
        background-color: lightgreen;
    }

    #off:hover, #off:active {
        background-color: lightcoral;
    }
</style>
