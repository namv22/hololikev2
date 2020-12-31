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
            <SearchForm v-on:search="search" />
        </div>
    </parallax>
    <!-- <div class="main main-raised">
            <div class="section section-tabs">
                <div class="container"> -->
    <!-- <tabs></tabs> -->
    <!-- <videos></videos> -->
    <!-- <landing></landing> -->

    <div class="main main-raised">

        <Search v-on:search="search" />

        <div class="button" v-if="reformattedSearchString">
            <Pagination v-bind:prevPageToken="api.prevPageToken" v-bind:nextPageToken="api.nextPageToken" v-on:prev-page="prevPage" v-on:next-page="nextPage" />
        </div>

        <SearchResults v-if="reformattedSearchString" v-bind:videos="videos" v-bind:reformattedSearchString="reformattedSearchString" />

        <div class="button" v-if="reformattedSearchString">
            <Pagination v-bind:prevPageToken="api.prevPageToken" v-bind:nextPageToken="api.nextPageToken" v-on:prev-page="prevPage" v-on:next-page="nextPage" />
        </div>
        <!-- </div>
            </div>

        </div> -->
    </div>
</div>
</template>

<script>
import Tabs from "./components/TabsSection";
import Videos from "./Videos";
import Landing from "./Landing";
import SearchForm from "./SearchForm";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Pagination from "./Pagination";
import axios from "axios";

export default {
    components: {
        // Tabs,
        // Videos,
        // Landing,
        SearchForm,
        Search,
        SearchResults,
        Pagination,
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
                type: "video",
                order: "date",
                maxResults: 50,
                q: "",
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
            const {
                baseUrl,
                part,
                type,
                order,
                maxResults,
                q,
                channelId,
                key,
            } = this.api;
            const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&channelId=${channelId}&key=${key}`;
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
                channelId,
                key,
                prevPageToken,
            } = this.api;
            const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&channelId=${channelId}&key=${key}&pageToken=${prevPageToken}`;
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
                channelId,
                key,
                nextPageToken,
            } = this.api;
            const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&channelId=${channelId}&key=${key}&pageToken=${nextPageToken}`;
            this.getData(apiUrl);
        },

        getData(apiUrl) {
            axios.get(apiUrl).then((res) => {
                this.videos = res.data.items;
                this.api.prevPageToken = res.data.prevPageToken;
                this.api.nextPageToken = res.data.nextPageToken;
            });
            // .catch(error => console.log(error));
        },
        created() {
            const {
                baseUrl,
                part,
                type,
                order,
                maxResults,
                channelId,
                key,
            } = this.api;
            const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&maxResults=${maxResults}&channelId=${channelId}&key=${key}`;
            this.getData(apiUrl);
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
    .md-button+.md-button {
        margin-left: 5px;
    }
}

@media all and (min-width: 991px) {
    .btn-container {
        display: flex;
    }
}

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

.button {
    margin: auto;
}
</style>
