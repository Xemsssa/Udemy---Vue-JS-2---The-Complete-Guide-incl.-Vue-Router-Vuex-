export default fruitMixin = {
    data() {
        return {
            text1: "make me uppercase",
            text2: "make me lowercase",

            listOfFruits: ['apple', 'mango', 'banaba'],
            filterFruits: ""
        }
    },

    computed: {
        filter() {
            return this.listOfFruits.filter((el)=> {
                return el.match(this.filterFruits);
            });
        }
    },

    created() {
        console.log("created");
    },
}