<template>
    <div class="container ">
        <div class="row">
            <div class="col-md-12">
                <header-vue></header-vue>
            </div>
            <hr>
           <!-- <button @click="showComponent == 'QuizVue' ? showComponent = 'AnswerVue' : showComponent = 'QuizVue'">Change Component</button>  -->
            <component :is=showComponent></component>
        </div>
    </div>
</template>

<script>
import HeaderVue from "./components/Header";
import QuizVue from "./components/Quiz";
import AnswerVue from './components/Answer'

export default {
    data() {
        return{
            showComponent: 'QuizVue'
        }
    },
    
    components: {
        HeaderVue,
        QuizVue,
        AnswerVue
    }

}
</script>

<style >
    .container {
        text-align: center;
    }

    .quizBLock {
    }

    .quizQuestion {
        /* background-color: lightGray; */
    }

    .quizVariant {
        padding: 20px;
        /* border: 1px solid lightgrey; */

    }
</style>
