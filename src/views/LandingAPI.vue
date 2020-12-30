<template>
<div class="wrapper">
    <div class="main main-raised">
        <div class="section text-center">
            <h3>Search Results for "{{ reformattedSearchString }}"</h3>
            <div class="container">
                <div class="team">
                    <div class="md-layout">
                        <div class="md-layout-item md-medium-size-100 md-size-33" id="posts" v-bind:key="video.id.videoId" v-for="video in videos">
                            <VideosAPI v-bind:video="video" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import VideosAPI from "./VideosAPI.vue";

export default {
    bodyClass: "landing-page",
    components: {
        VideosAPI,
    },
    props: ['videos', 'reformattedSearchString'],
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

        },
        modalId(i) {
            return "game";
        },
        sendInfo(post) {
            this.selectedPost = post;
        },
    },
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
    display: flex;
    justify-content: center !important;
}

.contact-form {
    margin-top: 30px;
}

.md-has-textarea+.md-layout {
    margin-top: 15px;
}

.mt {
    margin-top: 20px;
}

$list-width: 320px;

.full-control {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
}

.list {
    width: $list-width;
}

.full-control>.md-list {
    width: $list-width;
    max-width: 100%;
    height: 400px;
    display: inline-block;
    overflow: auto;
    border: 1px solid rgba(#000, 0.12);
    vertical-align: top;
}

.control {
    min-width: 250px;
    display: flex;
    flex-direction: column;
    padding: 16px;
}

.h4 {
    text-align: left;
}

.md-card-content {
    text-align: left;
}
</style>
