<template>
    <p> Counter is : {{ singleCounter }}</p>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'singleCounter'
        ])
    }
}
</script>