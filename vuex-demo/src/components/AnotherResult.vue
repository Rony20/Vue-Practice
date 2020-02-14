<template> 
    <div>
    <p> Double Counter is : {{ doubleCounter }}</p>
    <p> Number of clicks : {{ stringCounter }} </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'doubleCounter',
            'stringCounter'
        ]),
        ourOwnCOmputedProperty()
        {
            return 'Our own computed property.'
        }
    }
    }
</script>
// I had shown that how we can add our own computed property.
// mapGetters creates it's own object so we cannot pass it normally but we have to pass it using spread operator. 