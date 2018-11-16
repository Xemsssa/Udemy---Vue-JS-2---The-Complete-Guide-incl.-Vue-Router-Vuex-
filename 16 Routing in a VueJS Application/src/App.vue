
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="text-center">Routing</h1>
                <hr>
                <header-vue/>
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>

import HeaderVue from './components/Header.vue';

export default {
    components: {
        HeaderVue
    }
}
</script>

<style>
    .slide-enter {
        opacity: 1;
    }

    .slide-enter-active {
        transition: opacity 1s ease;
        opacity: 0;
        animation: slide-out 1s ease-out forwards;
    }

    .slide-leave {
        opacity: 0;
        transform: translateX(0);
    }

    .slide-leave-active {
        transition: opacity 1s ease;
        opacity: 1;
         animation: slide-in 1s ease-out forwards;
    }

    @keyframes slide-out {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-30px);
        }
    }

     @keyframes slide-in {
        0% {
            transform: translateY(-30px);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>
