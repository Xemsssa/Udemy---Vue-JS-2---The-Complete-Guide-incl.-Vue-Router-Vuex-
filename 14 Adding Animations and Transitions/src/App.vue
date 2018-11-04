<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Animation</h1>
                <hr>
                <select v-model="alertAnim">
                    <option value="fade">fade</option>
                    <option value="slide">slide</option>
                </select>
                    <!-- {{alertAnim}} -->


                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br>
                <transition name="fade">
                    <div class="alert alert-info" v-if="show">Lorem ipsum dolor sit.</div>
                </transition>

                <br>
                <!-- animation -->
                <transition name="slide">
                    <div class="alert alert-info" v-if="show">Lorem ipsum dolor sit.</div>
                </transition>

                <transition name="fade" appear>
                    <div class="alert alert-info" v-if="show">Lorem ipsum dolor sit.</div>
                </transition>

                <transition 
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake">
                    <div class="alert alert-info" v-if="show">Lorem ipsum dolor sit.</div>
                </transition>

                <transition :name="alertAnim">
                    <div class="alert alert-info" v-if="show">Lorem ipsum dolor sit.</div>
                </transition>

                <transition :name="alertAnim" mode="out-in">
                    <div class="alert alert-info" v-if="show" >Lorem ipsum dolor sit.</div>
                    <div class="alert alert-warning" v-if="!show">Lorem ipsum dolor sit.</div>

                    <div class="alert alert-info" v-if="show" key="info">Lorem ipsum dolor sit.</div>
                    <div class="alert alert-warning" else key="warning">Lorem ipsum dolor sit.</div>
                </transition>

                <hr>

                <button class="btn btn-primary" @click="load = !load">Show/Hide</button>
                <transition
                    v-if="load"
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="beforeLeave"
                    @leave-cancelled="leaveCancelled">
                        <div style="height: 100px; width: 100px; background-color: red;"></div>
                 </transition>
                 <hr>
                <button @click="showComponent == 'SuccessVue' ? showComponent = 'AlertVue' : showComponent = 'SuccessVue'">Change Component</button> 
                <component :is=showComponent></component>

                <hr>
                <!-- transition group -->
                <ul>
                    <button @click="addFruit">Add item</button>
                    <input type='text' v-model=fruit>{{fruit}}

                    <transition-group name="slide"> 
                        <li v-for="(item, index) in items" :key="index" @click="removeItems(index)" class="list-group-item">{{item}}</li>
                    </transition-group>

                    <!-- {{items}} -->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import SuccessVue from './components/Success';
import AlertVue from './components/Alert';

export default {
    data() {
        return {
            show: false,
            load: false,
            alertAnim: 'fade',
            elementWidth: 100,
            showComponent: 'SuccessVue',
            fruit: '',
            items: ['apple', 'banana', 'kiwi']
        }
    },

    components: {
        SuccessVue,
        AlertVue
    },

    methods: {
        // showAlert() {
        //     this.show = true
        // }

        beforeEnter: (to, from, next) => {
            console.log("beforeEnter");
            this.elementWidth = 100;
            el.style.elementWidth = this.elementWidth + 'px';
        },

        enter(el, done) {
            console.log("enter");
            let round = 1;
            const interval = setInterval(() => {
                // el.style.width = el.style.width + round * 10;
                el.style.width = (this.elementWidth + round * 10) + 'px';
                if (round > 20) {
                    clearInterval(interval);
                    done();
                }
            }, 20);
            // done();
        },
        afterEnter(el) {
            console.log("afterEnter");
        },
        enterCancelled(el) {
            console.log("enterCancelled");
        },


        beforeLeave: (to, from, next) => {
            cosnole.log("beforeLeave");
            this.elementWidth = 300;
            el.style.elementWidth =  this.elementWidth + 'px';
        },
        leave(el, done) {
            console.log("leave");
            let round = 1;
            const interval = setInterval(() => {
                // el.style.width = el.style.width + round * 10;
                el.style.width = (this.elementWidth - round * 10) + 'px';
                if (round = 0) {
                    clearInterval(interval);
                    done();
                }
            }, 20);
        },
        afterLeave(el) {
            console.log("afterLeave");
        },
        leaveCancelled(el) {
            console.log("leaveCancelled");
        },

        // fruits
        addFruit() {
           this.items.push(this.fruit); 
        },

        removeItems(index) {
            // alert('clicked');
            this.items.splice(index, 1);
        }
    }
}


</script>
  
<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
        opacity: 1;
    }

    .fade-leave {

    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
    }
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        opacity: 1;
        transition: opacity 1s;
    }

    .slide-leave{
        opacity: 0;
        transition: opacity 1s ;
    }
    .slide-leave-active{
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s ;
        opacity: 0;
        position: absolute;
    }

    .slide-move {
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(0);
        } to {
            transform: translateY(20px);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(20px);
        } to {
            transform: translateY(0px);
        }
    }

    .li_items {
        background-color: blueviolet;
    }
</style>
