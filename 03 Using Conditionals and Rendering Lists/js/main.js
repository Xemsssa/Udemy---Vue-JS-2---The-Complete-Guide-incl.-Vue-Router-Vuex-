
 new Vue({
    el: "#root",
    data :{
        isShowing: true,
        menus: ["apple", "pizza", "beer"],
        persons: [
            {id:1, name: "Andrzej", color: "blue"},
            {id:2, name: "Alex", color: "green"}
        ] 
             
    },

    methods: {
        changeShowing() {
            this.isShowing = !this.isShowing;
        }
    }
})