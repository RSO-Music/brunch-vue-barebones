<template>
    
</template>

<script>
    export default {
        name: "Upload",
        data() {
            return {
                songs: null
            }
        },
        mounted() {
            this.load();
        },
        methods: {
            load() {
                console.log("inside log");
                fetch("http://34.89.111.13/v1/songs")
                    .then(Response => Response.json())
                    .then(json => {
                        this.songs = json;
                        //this.listConfig = this.songs;
                        console.log(this.songs);
                    });
            }
        }
    }
</script>

<style scoped>

</style>