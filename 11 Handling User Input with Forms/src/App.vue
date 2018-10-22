<template>
    <div>
        <!-- <header-vue :email="email"></header-vue> -->
        <!-- <form-vue></form-vue> -->
        <!-- <output-vue></output-vue> -->

        <div>
        <form>
            
            <div class="form-group">
                <label>Mail</label>
                <input type="text" class="form-control" v-model.trim=user.email>
                <!-- <input type="text" class="form-control" 
                    :value="user.email"
                    @input="user.email = $event.target.value"
                > -->
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" v-model.lazy=user.password>
                {{user.password}}
            </div>
            <div class="form-group">
                <label>Age</label>
                <input type="number" class="form-control" v-model.number=user.age> 
            </div>
            <div class="form-group">
                <label>Message</label>
                <textarea name="" id="" cols="30" rows="10" v-model=user.message></textarea>
            </div>
            <div class="form-group">
                <label for="sendMail">
                    <input type="checkbox" id="sendMail" value="sendEmail" v-model=user.sendEmail>Send Mail
                    <!-- {{user.sendEmail}} -->
                </label>

                <label for="sendInfoMail">
                    <input type="checkbox" id="sendInfoMail" value="sendInfoEmail" v-model="user.sendEmail">Send InfoMail
                </label>
            </div>
            <div class="form-group">
                <input type="radio" name="sex" value="male" v-model=user.sex>Male
                <input type="radio" name="sex" value="female" v-model=user.sex>Female
            </div>
            <div class="form-group">
                <select id="priority" v-model="user.selected" >
                    <option v-for="priority in prioritys" :key="priority" >{{priority}}</option>
                </select>
            </div>

            <switch-vue v-model="user.switch"/>

            <hr>
            <button type="submit" @click.prevent="submitted">Submit</button>
            <hr>
        </form>    
    </div>

    <div class="output" v-if="user.submit">
        <h3 class="outputHeader">Your Data</h3>
        <p>Mail: {{user.email}}</p>
        <p>Password:  {{user.password}}</p>
        <p>Age:  {{user.age}}</p>
        <p style="white-space: pre">Message: {{user.message}}</p>
        <p>Send Mail? </p>
            <ul v-for="send in user.sendEmail" :key="send">
                <li >{{send}}</li>
            </ul>
        <p>Gender: {{user.sex}}</p>
        <p>priority: {{user.selected}}</p>
        <p>Swiched: {{user.switch}}</p>
    </div>  
    </div>
</template>

<script>
    import HeaderVue from './components/header/Header.vue';
    import FormVue from './components/form/Form.vue';
import OutputVue from './components/output/Output.vue';
import SwitchVue from './components/custom/Switch.vue';
    export default {
        components: {
            HeaderVue,
            FormVue,
            OutputVue,

            SwitchVue

        },

        data() {
            return {
                // email: ''
                user: {
                    email: "",
                    password: "",
                    age: 32,
                    message: "lorem text",
                    sendEmail: [],
                    sex: "male",
                    selected: "hight",
                    switch: true,
                    submit: false

                },
                prioritys: ['low', "middle", 'high'] 
            }
        },

        methods: {
            submitted() {
                this.user.submit = true;
            }
        }

        
    }
</script>

<style>
   
</style>
