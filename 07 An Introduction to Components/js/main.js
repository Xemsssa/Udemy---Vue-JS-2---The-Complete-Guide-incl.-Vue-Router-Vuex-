
let data = {
    status: "Critical"
}

let vm = {
    data: function(){
        // return data;
        return {
            status: "Local"
        };
    },

    template: "<p>Server Status: {{status}} (<button @click='changeStatus'>Change Status</button>)</p>",

    methods: {
        changeStatus() {
            this.status = "From Local"
        }
    }
}


Vue.component("my-cmp", {
    data: function(){
        // return data;
        return {
            status: "Critical"
        };
    },

    template: "<p>Server Status: {{status}} (<button @click='changeStatus'>Change Status</button>)</p>",

    methods: {
        changeStatus() {
            this.status = "Normal"
        }
    }
})


new Vue({
    el: "#app1",
    components: {
        vm
    }
})


new Vue({
    el: "#app2"
})

