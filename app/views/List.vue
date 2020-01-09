<template>
    <div>hhjfc
        <table style="width:100%">
            <router-link to="/hello/">FirstRoute</router-link>
            <tr v-for="song in songs">
                {{song}}
                <router-link :to="{ name: 'Stream', params: { songId: song.songId }}">STREAM </router-link>
<!--                <router-link to="/stream/{{song.id}}">Stream</router-link>-->
            </tr>

        </table>
    </div>

</template>

<script>
    export default {
        name: "List",
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