
let el =  new Vue({
    el: "#root",
   data :{
       text: "Helloworld!",
       yourText: "",
    //    changeText: ""
        link: "Http://google.com",
        header: "Hi!",
        finishedLink: "<a href='http://google.com' >Google</a>",
        notSanitized: "<a href='http://dangerLink.com' >Google</a>",
        count: 0,
        x: 0,
        y: 0,
        countTwo: 0,
        isRed: false,
        color: "green",
        width: 100
   },

   computed: {
       output() {
            console.log("computed");
            return this.count > 5 ? "Greater than 5" : "Smaller than 5";
       },

       divStyles() {
        return {
            red: this.isRed,
            blue: !this.isRed
        }
       },
       
       myStyle() {
           return {
               width: this.width + "px"
           }
       }

   },

   watch: {
       count: (val) => {
        let that = el;
        // let that = this;
        setTimeout(() => {
        //    count = 0;
        // alert("time out");
        that.count = 0;
        }, 2000);
       } 
   },

   methods: {
       changeText(e) {
           this.yourText = e.target.value;
       },

       returnValue() {
        //    return "some text";
        this.header = "Rerendered";
        return  this.text;
       },

       counterPlus() {
        //    this.count = this.count + 1;
        this.count++;
        // this.count += 1;
       },

       updateCoord(e) { 
        this.x = e.clientX;
        this.y = e.clientY;
       },

       counterPlusNumber(step, event) {
        //    this.count = this.count + 1;
        this.count += step ;
        // this.count += 1;
       },


       deadZone(e) {
        e.stopPropagation();
       },

        alertMe() {
           alert("Alert");
        },

        result() {
            return this.count > 5 ? "Greater than 5" : "Smaller than 5";
        },

        changeLink () {
            this.link = "Http://apple.com";
        },

        setRed() {
            // alert("clicked");
            // console.log (el.isRed);
            this.isRed ? this.isRed = false : this.isRed =  true; 
            // this.isRed = true;
        }

   }
})