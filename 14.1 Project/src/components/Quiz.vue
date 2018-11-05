<template>
    <div class="quizBLock">
        <div class="quizQuestion">What's {{this.firstNumber}} v-if="{{this.nodeNumber == 1 ? "-" : "+" }} {{this.secondNumber}}?</div>
        <div class="quizVariants row">
            <div class="col-xs-6 quizVariant" v-for="(variant, index) in variants" :key="index">
                <button class="btn btn-primary" @click=checkVariant(index)>{{variant}}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            // arrays of numbers for showing variants 
            // variants: [1, 2, 3, 4]
            variants: [],
            firstNumber: 0,
            secondNumber: 0,
            min: 1,
            max: 100,
            nodeNumber: 1,

            // result: computedResult()
            result: 0
        }
    },

     methods: {

        // resetGame() {
        //     this.variants = [];
        //     this.firstNumber = 0;
        //     this.secondNumber = 0;
        //     this.result =  0;
        // },

        // generate 4 random numbers
        generateVariants() {
            for(let i = 0; i < 3; i++) {
                let randomNumber = this.generateNumber(this.min, this.max);
                this.variants.push(randomNumber);
            }
            console.log(this.variants);
        },

        generateNodeNumber(min, max) {
            return this.generateNumber(min, max);
        },

        generateNumber(min, max) {
            return Math.floor((Math.random() * (max - min)) + min);
        },

        computedResult() {
            this.firstNumber = this.generateNumber(1, 100);
            this.secondNumber = this.generateNumber(1, 100);
            this.nodeNumber = this.generateNodeNumber(1, 2); 

            if(this.nodeNumber == 1) {
                return this.firstNumber - this.secondNumber;
            } else {
                 return this.firstNumber + this.secondNumber;
            }
            // return this.firstNumber - this.secondNumber;
        },

        checkVariant(index) {
            // alert("checked");
            // this.variants.splice(index, 1);
            let userVariants = this.variants[index];
            if (userVariants != this.result) {
                // console.log("true");
                 this.variants.splice(index, 1);
                // 
            } else {
               alert("You are right!");
            //    resetGame();
            }
        }
    },

    beforeMount() {
        console.log('before mount');
        // newGame();
        this.result = this.computedResult(); 
        this.generateVariants();
        this.variants.push(this.result);
    }

}
</script>