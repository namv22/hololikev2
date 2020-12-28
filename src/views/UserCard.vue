<template>
    <div class="wrapper">
        <div class="main main-raised">
            <div class="section text-center">
                <div class="container">
                    <div class="team">
                        <div class="md-layout">
                            <div class="md-layout-item md-medium-size-100 md-size-33" id="posts" v-for="post in orderedPosts" v-bind:key="post.name">
                                <div class="team-player">
                                    <md-card class="md-card-profile">
                                        <div class="md-layout-item mx-auto">
                                            <img src="https://picsum.photos/300/150/?image=41" alt="Skyscraper">
                                        </div>

                                        <md-card-content>
                                            <p class="card-description">
                                                Don't be scared of the truth because we need to restart the human
                                                foundation in truth And I love you like Kanye loves Kanye I love Rick
                                                Owens’ bed design but the back is...
                                            </p>
                                            <md-button class="md-round md-success">Follow</md-button>
                                        </md-card-content>
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
        components: {},
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
                mainProps: {
                    width: 50,
                    height: 50,
                    class: 'm1'
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
        border: 1px solid rgba(#000, .12);
        vertical-align: top;
    }

    .control {
        min-width: 250px;
        display: flex;
        flex-direction: column;
        padding: 16px;
    }
</style>
