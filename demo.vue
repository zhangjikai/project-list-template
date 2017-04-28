<template>
    <span>{{ message }} {{ shortMsg }}</span>
</template>

<script>
    import eventBus from "EventBus.js"
    export default {

        methods: {
            notice: function() {
                this.$emit('change', "value");
            }
        }
    }
</script>

