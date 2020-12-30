<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1>Tớ mang clip Hololive về dịch</h1>
              <h3>Website chuyên chôm clip Hololive về dịch</h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <!-- <div class="main main-raised">
            <div class="section section-tabs">
                <div class="container"> -->
    <!-- <tabs></tabs> -->
    <!-- <videos></videos> -->
    <!-- <landing></landing> -->
    <SearchForm v-on:search="search" />
    <landingapi></landingapi>
    <!-- </div>
            </div>

        </div> -->
  </div>
</template>

<script>
import Tabs from "./components/TabsSection";
import Videos from "./Videos";
import Landing from "./Landing";
import landingapi from "./LandingAPI";
import SearchForm from "./SearchForm.vue";

export default {
  components: {
    // Tabs,
    // Videos,
    // Landing,
    landingapi,
    SearchForm,
  },
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/KoroneRisu.jpg"),
    },
  },
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false,
      videos: [],
      reformattedSearchString: "",
      api: {
        baseUrl: "https://www.googleapis.com/youtube/v3/search?",
        part: "snippet",
        order: "date",
        maxResults: 10,
        channelId: "UCwq3aenbgJR1ZWLvBi2JvTA",
        key: "AIzaSyCwBJ0TFJbt6q3LjXxgSB3GhzpO6h11uKE",
        prevPageToken: "",
        nextPageToken: "",
      },
    };
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
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
          console.log("search result", res);
        })
        .catch((error) => console.log(error));
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`,
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`,
      };
    },
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  },
};
</script>

<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
