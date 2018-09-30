let  el = new Vue({
    el: "#app",
    data: {
        // health level init
        playerHealth: 100,
        monsterHealth: 100,
        // heat
        playerHeat: 10,
        specialAttackValue: 20,
        healValue: 6,

        // logs
        logs: [],

        // ability
        specialAttackCount: 3,
        healCounter: 3,

        gameIsRunning: false

    },

    methods: {
        // start new game
        startNewGame () {
            // reset health to default
            this.gameIsRunning = true;

            this.playerHealth = 100;
            this.monsterHealth = 100;

            // clear log
            // this.log = "";
            this.logs = [];
           
        },

        damage(min, max) {
            // return  Math.round(Math.random()*10);
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },

        // attack
        attack() {

            let msg = "";
            // let monsterHeat =  Math.round(Math.random()*10);

            // this.monsterHealth -= this.playerHeat;
            // this.playerHealth -= monsterHeat;


            // video
            // let min = 3;
            // let max = 10;
            // let damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            let monsterHeat =  this.damage(5, 15)
            let playerHeat =  this.damage(3, 10)
          
            this.monsterHealth -= playerHeat;
            this.playerHealth -= monsterHeat;

            this.winner();
            
            // if(this.monsterHealth <= 0 ) {
            //     msg = "The winner is HERO";
            //     this.gameIsRunning = false;
            //     alert(msg);
            // } else if (this.playerHealth <= 0){
            //     msg = "The winner is Monster";
            //     this.gameIsRunning = false;
            //     alert(msg);
            // } else if (this.playerHealth <= 0 && this.monsterHealth <= 0) {
            //     msg = "BOTH are dead! Tie!!!";
            //     this.gameIsRunning = false;
            //     alert(msg);
            // } 
            // // else {
                // msg = "Playing";
            // }

            this.logs.push("The player heat monster by " + playerHeat);
            this.logs.push("The player was heat by monster " + monsterHeat);
        },
        // special attack
        specialAttack() {
            this.monsterHealth -= this.specialAttackValue;
            this.logs.push("The player heat monster by " + this.specialAttackValue );
        },
        // heal

        heal(){
            this.playerHealth += this.healValue;
            this.logs.push("The player healed " + this.healValue );
        },
        // give up
        giveUp(){
            alert("Give up");
            this.playerHealth = 100;
            this.monsterHealth = 100;
            // clear log
            this.logs = [];
        },

        winner () {
            let msg = "";

            if(this.monsterHealth <= 0 ) {
                confirm("The winner is HERO! Start New Game?" ) ? this.startNewGame() : this.gameIsRunning = false;
            } else if (this.playerHealth <= 0){
                confirm("The winner is Monster! Revanche?" ) ? this.startNewGame() : this.gameIsRunning = false;
            }
            // else {
            //     // msg = "Playing";
            // }
            
            // alert(msg);
        }


    },

    watch: {
        playerHealth() {
            // let msg = ''; 
            // // this.playerHealth <= 0 ? msg = "Monster win" : msg = "Player win";

            // if (this.playerHealth <= 0 ) {
            //     msg = "Monster win";
            // } else if(this.monsterHealth <= 0) {
            //     msg = "Player win";
            // }

            // alert (msg);
        }
    }
})