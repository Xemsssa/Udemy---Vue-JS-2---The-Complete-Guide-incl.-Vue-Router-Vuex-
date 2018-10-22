<template>
    <div>
        <form>
            <div class="form-group">
                <label>Mail</label>
                <input type="text" class="form-control" v-model="email"> 
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control"> 
            </div>
            <div class="form-group">
                <label>Age</label>
                <input type="number" class="form-control"> 
            </div>
            <div class="form-group">
                <label>Message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="form-group">
                <input type="checkbox">Send Mail
                <input type="checkbox">Send Infomail
            </div>
            <div class="form-group">
                <input type="radio" name="sex" value="male">Male
                <input type="radio" name="sex" value="female">Female
            </div>
            <div class="form-group">
                <label>Priority</label>
                <input type="text" class="form-control"> 
            </div>

            <hr>
            <button type="submit">Submit</button>
            <hr>
        </form>    
    </div>
</template>

<script>
export default {
    props: ['email']
}
</script>

<style>

</style>
