<template>
    <div class="main">
        <h3> Edit The User {{ $route.params.id }}</h3>
        <p>Locale : {{ $route.query.locale }}</p>
        <p> Analytics : {{ $route.query.q }}</p>
        <button class="btn btn-primary" @click="confirmed = true"> Confirm </button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            confirmed: false
        }
    },
    beforeRouteLeave(to, from, next){
        if(this.confirmed){
            next()
        }else{
            if(confirm('Are you sure ?')){
                next()
            }else{
                next(false)
            }
        }
    }
}
</script>