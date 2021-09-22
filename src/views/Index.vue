<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <iframe src="https://www.youtube.com/embed/O-SXhtYjprc?playlist=O-SXhtYjprc&autoplay=1&loop=1&mute=1&controls=0"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
        style="height:100%;width:100%;border:none;overflow:hidden;"></iframe>
    </parallax>

    <div class="main main-raised">
      <br /><br />

      <div id="app"
        class="center md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
        <button v-for="gen0 in gen0s" v-bind:key="gen0.id" @click="onClick($event)">
          <span id="background" :style="{ backgroundImage: `url(${gen0.BG})` }"></span>
          <span id="shade"></span>

          <span id="body">
            <span id="inner">
              {{ gen0.name }}
              <span id="line"></span>
            </span>
          </span>

          <span id="touchpad" ref="touchpad"></span>
        </button>
      </div>
      <br /><br />

    </div>
    <br /><br />
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    components: {},
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
        gen0s: [{
            id: 'sora',
            name: 'Tokino Sora',
            BG: 'https://hololive.hololivepro.com/wp-content/uploads/2021/05/tokino_sora_thumb.png'
          },
          {
            id: 'roboco',
            name: 'Roboco-san',
            BG: 'https://hololive.hololivepro.com/wp-content/uploads/2021/08/roboco_list_thumb.png'
          },
          {
            id: 'miko',
            name: 'Sakura Miko',
            BG: 'https://hololive.hololivepro.com/wp-content/uploads/2020/06/miko_icon_210831.png'
          },
          {
            id: 'suisei',
            name: 'Hoshimachi Suisei',
            BG: 'https://hololive.hololivepro.com/wp-content/uploads/2020/10/hoshimachi_suisei_thumb.png'
          },
          {
            id: 'azki',
            name: 'AZKi',
            BG: 'https://hololive.hololivepro.com/wp-content/uploads/2021/05/azki_thumb.png'
          },
        ],
      };
    },
    methods: {
      onClick(event) {
        this.ripple(event);

        this.$emit("click");
      },

      ripple(event) {
        const target = this.$refs.touchpad;

        const circle = document.createElement("span");
        const diameter = Math.max(target.clientWidth, target.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - (target.offsetLeft + radius)}px`;
        circle.style.top = `${event.clientY - (target.offsetTop + radius)}px`;
        circle.classList.add("ripple");

        const ripple = target.getElementsByClassName("ripple")[0];

        if (ripple) {
          ripple.remove();
        }

        target.appendChild(circle);
      }
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
    justify-content: center;
    text-align: center;
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
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .center {
    justify-content: center;
    margin: auto;
    align-items: center;
    display: flex;
  }

  .iframe {
    width: 100%;
    height: 300px;
    border: 3px groove #f00
  }

  #over {
    font-size: 5em;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2
  }

  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  #app {
    width: 300px;
  }

  span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  button {
    width: 200px;
    height: 200px;
    color: inherit;
    border: 0;
    cursor: pointer;
    margin: 0;
    display: inline-flex;
    outline: 0;
    padding: 0;
    position: relative;
    align-items: center;
    user-select: none;
    border-radius: 0;
    vertical-align: middle;
    -moz-appearance: none;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  button:hover #shade {
    opacity: 0.15;
  }

  button:hover #inner {
    border: 4px solid white;
  }

  button:hover #line {
    opacity: 0;
  }

  #background {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background-size: cover;
    background-position: center 40%;
  }

  #shade {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.4;
    position: absolute;
    transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #000;
  }

  #body {
    top: 0;
    left: 0;
    color: #fff;
    right: 0;
    bottom: 0;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
  }

  #inner {
    padding: 16px 32px 14px;
    position: relative;
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.75;
    letter-spacing: 0.00938em;
  }

  #line {
    left: calc(50% - 9px);
    width: 18px;
    bottom: -2px;
    height: 3px;
    position: absolute;
    transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
  }

  #touchpad {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    overflow: hidden;
    position: absolute;
    border-radius: inherit;
    pointer-events: none;
  }
</style>