<template>
<div id="material-kit">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
        <router-view name="header" />
        <div>
            <router-view />

            <!-- Simply add the component (NB! Add your page link as prop data-href="String" and your preferred link title as link-text="String") -->
            <vue-facebook-page data-href="https://www.facebook.com/Hololike" link-text="Tớ Mang Clip Hololive Về Dịch" />
        </div>
        <router-view name="footer" />
    </div>
</div>
</template>
