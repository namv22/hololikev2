<template>
<div class="wrapper">
    <!-- <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Your Story Starts With Us.</h1>
            <h4>
              Every landing page needs a small description after the big bold
              title, that's why we added this text here. Add here all the
              information that can make you or your product create the first
              impression.
            </h4>
            <br />
            <md-button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              class="md-success md-lg"
              target="_blank"
              ><i class="fas fa-play"></i> Watch video</md-button
            >
          </div>
        </div>
      </div>
    </parallax> -->
    <div class="main main-raised">
        <div class="section text-center">
            <div class="container">
                <div class="team">
                    <div class="md-layout">

                        <div class="md-layout-item md-medium-size-33 md-small-size-100" id="posts" v-for="post in orderedPosts" v-bind:key="post.name">
                            <div class="team-player">
                                <md-card class="md-card-plain">
                                    <div class="md-layout-item mx-auto">
                                        <!-- <img :src="teamImg1" alt="Thumbnail Image" class="img-raised rounded-circle img-fluid" /> -->
                                        <img alt="Rounded Image" class="rounded" :class="{ 'responsive-image': responsive }" :src="'http://img.youtube.com/vi/' + post.yturl + '/hqdefault.jpg'" />
                                    </div>

                                    <md-card-content>
                                        <p class="card-title">
                                            {{post.name}}
                                        </p>
                                    </md-card-content>

                                    <md-card-actions class="text-center">
                                        <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                                            <i class="fab fa-twitter"></i>
                                        </md-button>
                                        <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                                            <i class="fab fa-instagram"></i>
                                        </md-button>
                                        <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                                            <i class="fab fa-facebook-square"></i>
                                        </md-button>
                                    </md-card-actions>
                                </md-card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import db from "@/db";

export default {
    bodyClass: "landing-page",
    props: {
        header: {
            type: String,
            default: require("@/assets/img/bg7.jpg")
        },
        teamImg1: {
            type: String,
            default: require("@/assets/img/faces/avatar.jpg")
        },
        teamImg2: {
            type: String,
            default: require("@/assets/img/faces/christian.jpg")
        },
        teamImg3: {
            type: String,
            default: require("@/assets/img/faces/kendall.jpg")
        }
    },
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
        };
    },
    computed: {
        headerStyle() {
            return {
                backgroundImage: `url(${this.header})`
            };
        },
        orderedPosts: function () {
            return _.orderBy(this.posts, ["date"], ["desc"]);
        },
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
</style>
