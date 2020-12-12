<template>
<div class="wrapper">
    <div class="md-layout">
        <div class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
         id="posts" v-for="post in orderedPosts" v-bind:key="post.name">
            <login-card header-color="green">
                <h4 slot="title" class="card-title">{{post.name}}</h4>
                <md-field class="md-form-group" slot="inputs">
                    <md-card-media>
                        <img :src="'http://img.youtube.com/vi/' + post.yturl + '/hqdefault.jpg'" />
                    </md-card-media>
                </md-field>
                <md-button slot="footer" class="md-simple md-success md-lg">
                    Xem
                </md-button>
            </login-card>
        </div>
    </div>
</div>
</template>

<script>
import {
    LoginCard
} from "@/components";
import db from "@/db";

export default {
    components: {
        LoginCard
    },
    computed: {
        orderedPosts: function () {
            return _.orderBy(this.posts, ["date"], ["desc"]);
        },
    },
    data() {
        return {
            showDialog: false,
            posts: [],
            selectedPost: "",
            playerVars: {
                autoplay: 0,
            },
        };
    },
    methods: {
        playing() {},
        modalId(i) {
            return "game";
        },
        sendInfo(post) {
            this.selectedPost = post;
        },
    },
    props: {
        msg: String,
    },
    created() {
        db.collection("holoposts")
            .orderBy("date")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.posts.push(doc.data());
                });
            });
    },
};
</script>

<style lang="css">
.md-layout-item{
    margin-bottom: 50px;
}
</style>
