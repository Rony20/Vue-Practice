<template>
<div class="main">
    <h3> User Details </h3>
    <p> User Loaded Has Id: {{ $route.params.id }}</p>
    <router-link 
        tag="button" 
        :to="link"
        class="btn btn-primary"> Edit User </router-link>
</div>
<!-- This is also be used as 'to' attribute in router-link.  -->
<!-- :to="'/user/' + $route.params.id + '/edit'" -->
</template>

<script>
export default {
    data(){
        return{
            link: { 
                name: 'userEdit',
                 params: {
                     id: $route.params.id
                     }, 
                 query: { 
                     locale: 'en', 
                     q: 100
                     } 
                }
            }
        }   
    }
</script>