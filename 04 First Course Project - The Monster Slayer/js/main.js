new Vue({
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
        healCounter: 3
    },

    methods: {
        // start new game
        startNewGame () {
            // reset health to default
            this.playerHealth = 100;
            this.monsterHealth = 100;

            // clear log
            // this.log = "";
            this.logs = [];
           
        },

        monsterHeat() {
            return  Math.round(Math.random()*10);
        },

        // attack
        attack() {

            let monsterHeat =  Math.round(Math.random()*10);
            this.monsterHealth -= this.playerHeat;
            this.playerHealth -= monsterHeat;

            this.logs.push("The player heat monster by 10");
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
            if(this.playerHealth <= 0 ) {
                msg = "The winner is Monster";
            } else if (this.monsterHealth <= 0){
                msg = "The winner is HERO";
            } else if (this.playerHealth <= 0 && this.monsterHealth <= 0) {
                msg = "BOTH are dead! Tie!!!";
            } else {
                msg = "Playing";
            }
            
            alert(msg);
        }


    },

    watch: {
        playerHealth() {
            let msg = ''; 
            this.playerHealth <= 0 ? msg = "Monster win" : msg = "Player win";

            alert (msg);
        }
    }
})