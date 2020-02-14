<template> 
    <div>
    <p> Counter is : {{ doubleCounter }}</p>
    <p> Number of clicks : {{ stringCounter }} </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: mapGetters([
        'doubleCounter',
        'stringCounter'
    ])
    }
</script>
// We can aslo use object instead of list in mapGetters. But still one problem is there. We cannot use our own computed property here.