<template>
  <div class="wrapper">
    <div class="main main-raised">
      <div>
        <!--            <b-button v-b-toggle.sidebar-right>Toggle Sidebar</b-button>-->
        <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
          <template #footer="{ hide }">
            <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
              <strong class="mr-auto">Footer</strong>
              <b-button size="sm" @click="hide">Close</b-button>
            </div>
          </template>
          <div class="px-3 py-2 mt">
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <b-img
              src="https://picsum.photos/500/500/?image=54"
              fluid
              thumbnail
            ></b-img>
          </div>
          <div>
            <b-button v-b-toggle.collapse-1 variant="primary"
              >Toggle Collapse</b-button
            >
            <b-collapse id="collapse-1" class="mt-2">
              <b-card>
                <p class="card-text">Collapse contents Here</p>
                <b-list-group>
                  <b-list-group-item button>
                    <b-img
                      v-bind="mainProps"
                      rounded
                      src="https://picsum.photos/500/500/?image=54"
                      alt="Rounded image"
                    ></b-img>
                    Button item
                  </b-list-group-item>
                  <b-list-group-item button>I am a button</b-list-group-item>
                  <b-list-group-item button disabled
                    >Disabled button</b-list-group-item
                  >
                  <b-list-group-item button
                    >This is a button too</b-list-group-item
                  >
                </b-list-group>
              </b-card>
            </b-collapse>
          </div>
        </b-sidebar>
      </div>
      <div class="section text-center">
        <div class="container">
          <div class="team">
            <div class="md-layout">
              <VideosAPI
                v-bind:videos="videos"
                v-bind:reformattedSearchString="reformattedSearchString"
              />
            </div>
          </div>
        </div>
      </div>
      <b-modal size="xl" id="game" :title="selectedPost.name">
        <b-embed
          type="iframe"
          aspect="16by9"
          :src="'https://www.youtube.com/embed/' + video.id.videoId"
          allowfullscreen
        ></b-embed>
      </b-modal>
    </div>
  </div>
</template>

<script>
import axios from 'axios'; 
import VideosAPI from "./VideosAPI.vue";

export default {
  bodyClass: "landing-page",
  components: {
    VideosAPI,
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg7.jpg"),
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpg"),
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg"),
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/kendall.jpg"),
    },
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
        class: "m1",
      },
      videos: [],
      reformattedSearchString: "",
      api: {
        baseUrl: "https://www.googleapis.com/youtube/v3/search?",
        part: "snippet",
        type: "video",
        order: "date",
        maxResults: 10,
        channelId: "UCwq3aenbgJR1ZWLvBi2JvTA",
        key: "AIzaSyCwBJ0TFJbt6q3LjXxgSB3GhzpO6h11uKE",
        prevPageToken: "",
        nextPageToken: "",
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
    sendInfo(post) {
      this.selectedPost = post;
    },
    search(searchParams) {
      this.reformattedSearchString = searchParams.join(" ");
      this.api.q = searchParams.join("+");
      const { baseUrl, part, type, order, maxResults, q, key } = this.api;
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}`;
      this.getData(apiUrl);
    },

    prevPage() {
      const {
        baseUrl,
        part,
        type,
        order,
        maxResults,
        q,
        key,
        prevPageToken,
      } = this.api;
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}&pageToken=${prevPageToken}`;
      this.getData(apiUrl);
    },

    nextPage() {
      const {
        baseUrl,
        part,
        type,
        order,
        maxResults,
        q,
        key,
        nextPageToken,
      } = this.api;
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}&pageToken=${nextPageToken}`;
      this.getData(apiUrl);
    },

    getData(apiUrl) {
      axios
        .get(apiUrl)
        .then((res) => {
          this.videos = res.data.items;
          this.api.prevPageToken = res.data.prevPageToken;
          this.api.nextPageToken = res.data.nextPageToken;
          console.log('search result', res);
        })
        .catch((error) => console.log(error));
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

.md-has-textarea + .md-layout {
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

.full-control > .md-list {
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
