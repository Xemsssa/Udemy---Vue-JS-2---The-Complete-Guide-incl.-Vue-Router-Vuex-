<template>
    <div>
        <h1>User Edit</h1>
        <p>Locale: {{$route.query.locale}}</p>
        <p>Params: {{$route.query.q}}</p>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <div style="height: 700px"></div>
        <p id="extra">Extra data</p>    
    </div>
</template>

<script>
    export default {
        data() {
            return {
                confirmed: false
            }
        },

        beforeRouteLeave (to, from, next) {
            if (this.confirmed) {
                next();
            } else {
                if(confirm("Are you sure?")) {
                    next();
                } else {
                    next(false);
                }
            }
        }
    }
</script>