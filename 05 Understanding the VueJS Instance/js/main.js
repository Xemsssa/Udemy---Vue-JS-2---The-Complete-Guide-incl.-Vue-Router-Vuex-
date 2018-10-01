new Vue({
    el: "#app",
    data: {
        // test: "test text"
        title: "The Vue title",
        show: false
    },
    methods: {
        showParagrapth() {
            this.show = true;
            this.changeTitle("Updated title");
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