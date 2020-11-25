<template>
<div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
        <div class="md-layout">
            <div class="md-layout-item">
                <div class="image-wrapper">
                    <!-- <img :src="leaf4" alt="leaf4" class="leaf4" v-show="leafShow" />
            <img :src="leaf3" alt="leaf3" class="leaf3" v-show="leafShow" />
            <img :src="leaf2" alt="leaf2" class="leaf2" v-show="leafShow" />
            <img :src="leaf1" alt="leaf1" class="leaf1" v-show="leafShow" /> -->
                    <div class="brand">
                        <h1>Tớ mang clip Hololive về dịch</h1>
                        <h3>Website chuyên chôm clip Hololive về dịch</h3>
                    </div>
                </div>
            </div>
        </div>
    </parallax>
    <div class="main main-raised">
        <div class="section section-tabs">
            <div class="container">
                <!-- <tabs></tabs> -->
                <login></login>
            </div>
        </div>

    </div>
</div>
</template>

<script>
import Tabs from "./components/TabsSection";
import Login from "../views/Login";

export default {
    components: {
        // Tabs,
        Login,
    },
    name: "index",
    bodyClass: "index-page",
    props: {
        image: {
            type: String,
            default: require("@/assets/img/KoroneRisu.jpg")
        },
    },
    data() {
        return {
            firstname: null,
            email: null,
            password: null,
            leafShow: false
        };
    },
    methods: {
        leafActive() {
            if (window.innerWidth < 768) {
                this.leafShow = false;
            } else {
                this.leafShow = true;
            }
        }
    },
    computed: {
        headerStyle() {
            return {
                backgroundImage: `url(${this.image})`
            };
        },
        signupImage() {
            return {
                backgroundImage: `url(${this.signup})`
            };
        }
    },
    mounted() {
        this.leafActive();
        window.addEventListener("resize", this.leafActive);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.leafActive);
    }
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
</style>
