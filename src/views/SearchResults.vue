<template>
<div class="wrapper">
    <div class="main main-raised">
        <div class="section text-center">
            <div class="container">
                <div class="team">
                    <div class="md-layout">
                        <div class="md-layout-item md-medium-size-100 md-size-33" v-bind:key="video.id.videoId" v-for="video in videos">
                            <VideoGridItem v-bind:video="video" />
                            <b-button block squared variant="outline-success" @click="showDialog = true, sendInfo(video)">Xem</b-button>
                        </div>
                        <md-dialog :md-active.sync="showDialog" v-if="selectedPost">
                            <md-dialog-title>
                                {{ selectedPost.snippet.title }}
                            </md-dialog-title>
                            <b-embed type="iframe" aspect="16by9" :src="'https://www.youtube.com/embed/' + selectedPost.id.videoId" allowfullscreen></b-embed>
                            <md-dialog-actions>
                                <b-button squared variant="outline-dark" @click="showDialog = false">Đóng</b-button>
                            </md-dialog-actions>
                        </md-dialog>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import VideoGridItem from './VideoGridItem';

export default {
    name: 'SearchResults',
    components: {
        VideoGridItem
    },
    data() {
        return {
            title: 'Search Results',
            displayMode: 'grid',
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
    computed: {
        headerStyle() {
            return {
                backgroundImage: `url(${this.header})`,
            };
        },
        orderedPosts: function () {
            return _.orderBy(this.posts, ["date"], ["desc"]);
        },
        player() {
            return this.$refs.youtube.player;
        },
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
        sendInfo(video) {
            this.selectedPost = video;
        },
    },
    props: ['videos', 'reformattedSearchString']
};
</script>

<style scoped>
button:focus {
    box-shadow: none !important;
}

.md-dialog /deep/.md-dialog-container {
    width: 1280px;
}
</style>
