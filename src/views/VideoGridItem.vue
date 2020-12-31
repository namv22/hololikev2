<template>
<div>
    <a :href="'https://www.youtube.com/watch?v=' + video.id.videoId" target="_blank">
        <img class="card-img-top" :src="video.snippet.thumbnails.high.url" alt="YouTube thumbnail">
    </a>
    <b-card class="card-body">
        <h5 class="card-title">{{ video.snippet.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ video.snippet.channelTitle }} | {{ video.snippet.publishedAt | formatDate }}</h6>
        <p class="text">
            {{ video.snippet.description }}
        </p>
    </b-card>
</div>
</template>

<script>
export default {
    name: 'VideoGridItem',
    props: ['video'],
    data() {
        return {
            name: null,
            email: null,
            message: null,
            showDialog: false,
            posts: [],
            selectedPost: "",
            playerVars: {
                autoplay: 0,
            },
            mainProps: {
                width: 50,
                height: 50,
                class: "m1",
            },
        };
    },
    methods: {
        playVideo() {
            this.player.playVideo();
        },
        playing() {
            console.log("\o/ we are watching!!!");
        },
        modalId(i) {
            return "game";
        },
        sendInfo(post) {
            this.selectedPost = post;
        },
    },
    computed: {
        player() {
            return this.$refs.youtube.player;
        },
    },

};
</script>
<style>
.text {
  text-align: left;
}
</style>