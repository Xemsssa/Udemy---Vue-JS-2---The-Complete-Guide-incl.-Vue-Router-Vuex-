let vm1 = new Vue({
    // el: "#app1",
    data: {
        // test: "test text"
        title: "The Vue title",
        show: false
    },
    methods: {
        showParagrapth() {
            this.show = true;
            this.changeTitle("Updated title");
            // alert(this.$refs);
            console.log(this.$refs.myBtn);

            this.$refs.innerText = "ref";
        },

        changeTitle(title) {
            this.title = title;
        }
    },

    watch: {
        title: (val) => {
            alert ("Title was changed to " + val);
        }
    }
})

// setTimeout(() => {

//     vm1.title = "Changed by timer"
// }, 3000);

vm1.$mount("#app1");


let vm2 = new Vue({
    el: "#app2",
    data: {
        title: "Another title"
    },

    methods: {
        changeFirstTitle() {
            vm1.title = "Changed from Vm2";
        }
    }
})


Vue.component("hello", {
    template: `<h1>HEllo from component</h1>`
});


let vm3 = new  Vue({
    template: "<h1>HEllo from mount</h1>"
})

// vm3.$mount("#app3");
// vm3.$mount();
// document.getElementById('app3').appendChild(vm3.$el);


// lifecycle

new Vue({
    el: "#app3",
    data: {
        title: "Lifecycle"
    },

    beforeCreate() {
        console.log("beforeCreate()");
    },

    created() {
        console.log("created()");
    },

    beforeMounted() {
        console.log("beforeMounted()");
    },

    mounted() {
        console.log("mounted()");
    },

    beforeUpdate() {
        console.log("beforeUpdate()");
    },

    updated() {
        console.log("updated()");
    },

    beforeDestroy() {
        console.log("beforeDestroy()");
    },

    destroyed() {
        console.log("destroyed()");
    },

    methods: {
        destroy() {
            this.$destroy();
        }
    }
})

