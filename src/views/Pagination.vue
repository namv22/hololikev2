<template>
  <div class="container">
    <nav class="button">
      <ul class="pagination">
        <li
          class="page-item li-item"
          v-bind:class="{ disabled: prevPageToken === undefined }"
        >
          <b-button @click="prevPage" pill variant="outline-danger"
            >Previous</b-button
          >
        </li>
        <li
          class="page-item li-item"
          v-bind:class="{ disabled: nextPageToken === undefined }"
        >
          <b-button @click="nextPage" pill variant="outline-success"
            >Next</b-button
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["prevPageToken", "nextPageToken"],
  methods: {
    prevPage() {
      this.$emit("prev-page");
    },
    nextPage() {
      this.$emit("next-page");
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.page-link {
  box-shadow: none !important;
}

.container {
  margin: auto;
}

.button {
  margin: auto;
}

.li-item {
  margin: 10px;
}
</style>
