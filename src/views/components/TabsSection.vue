<template>
  <div class="wrapper">
    <div id="nav-tabs">
      <!-- <h3>Navigation Tabs</h3> -->
      <div class="md-layout">
        <div class="md-layout-item md-size-30 md-small-size-60" 
        id="posts" v-for="post in orderedPosts" v-bind:key="post.name">
          <!-- <h3><small>Tabs with Icons on Card</small></h3> -->
          <nav-tabs-card no-label>
            <template slot="content">
              <md-tabs class="md-primary" md-alignment="left">
                <md-tab id="tab-home" :md-label="post.name">
                    <h4 slot="title" class="card-title">Login test</h4>
                 <md-card-media>
                        <img :src="'http://img.youtube.com/vi/' + post.yturl + '/hqdefault.jpg'" />
                    </md-card-media>
                </md-tab>
              </md-tabs>
            </template>
          </nav-tabs-card>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import { NavTabsCard } from "@/components";
import db from "@/db";

export default {
  components: {
    NavTabsCard
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

<style lang="css"></style>
