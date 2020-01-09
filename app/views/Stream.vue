<template>
    <div>
        <h1>{{ msg }}</h1>
        Hello {{ $route.params.name }}
    </div>
</template>

<script>
    export default {
        name: "Stream",
        data () {
            return {
                msg: 'FirstRoute'
            }
        }
    }
</script>

<style scoped>

</style>