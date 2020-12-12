<template>
<div>
    <h1>This is a website for Hololike fanpage</h1>
    <img alt="Hololike logo" src="../assets/img/watermark small.png" class="rotating">
    <p align="left">
        This website was created by these following components:
    </p>
    <p align="left"> vue: ^2.6.11</p>
    <p align="left"> vue-facebook-page: ^1.0.1</p>
    <p align="left"> vue-material: ^1.0.0-beta-11</p>
    <p align="left"> vue-parallaxy: ^1.1.1</p>
    <p align="left"> vue-router: ^3.1.6</p>
    <p align="left"> vue-youtube: ^1.4.0</p>
    <p align="left"> vuefire: ^2.2.2</p>
    <p align="left"> vuetify: ^2.2.11</p>
    <p align="left"> @fortawesome/fontawesome-svg-core: ^1.2.28</p>
    <p align="left"> @fortawesome/free-solid-svg-icons: ^5.13.0</p>
    <p align="left"> @fortawesome/vue-fontawesome: ^0.1.9</p>
    <p align="left"> bootstrap: ^4.4.1</p>
    <p align="left"> bootstrap-vue: ^2.11.0</p>
    <p align="left"> firebase: ^7.14.0</p>
</div>
</template>

<script>
export default {
    name: "About"
};
</script>

<style scoped>
@keyframes rotating {
    from {
        transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
}

@-webkit-keyframes rotating {
    from {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
}

.rotating {
    -webkit-animation: rotating 5s linear infinite;
    -moz-animation: rotating 5s linear infinite;
    -ms-animation: rotating 5s linear infinite;
    -o-animation: rotating 5s linear infinite;
    animation: rotating 5s linear infinite;
}
</style>
