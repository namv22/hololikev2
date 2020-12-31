<template>
<div class="container">
    <form class="mb-5">
        <div class="input-group" size="lg" align="center">
            <!-- <input
          v-model="searchString"
          type="text"
          class="form-control"
          placeholder="Search ..."
        > -->
            <div class="input-group-append">
                <b-button @click="parseSearchString" block squared variant="outline-dark">
                    XEM VIDEOS
                </b-button>
            </div>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name: 'SearchForm',
    data() {
        return {
            searchString: 'Tớ mang clip Hololive về dịch'
        };
    },
    methods: {
        parseSearchString() {
            // Trim search string
            const trimmedSearchString = this.searchString.trim();

            if (trimmedSearchString !== '') {
                // Split search string
                const searchParams = trimmedSearchString.split(/\s+/);
                // Emit event
                this.$emit('search', searchParams);
                // Reset input field
                this.searchString = '';
            }
        }
    }
};
</script>

<style scoped>
input,
button {
    box-shadow: none !important;
}

.form-control {
    border-color: #6c757d;
}
</style>
