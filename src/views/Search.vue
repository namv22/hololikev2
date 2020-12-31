<template>
<div class="container">
    <form class="mb-5">
        <div class="input-group">
            <!-- <input v-model="searchString" type="text" class="form-control" placeholder="Search ..."> -->
            <md-field>
                <label>Search</label>
                <md-input v-model="searchString" type="text" class="form-control" placeholder="Search..."></md-input>
            </md-field>
            <b-button @click="parseSearchString" block squared variant="outline-dark">
                Tìm
            </b-button>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name: "SearchForm",
    data() {
        return {
            searchString: "",
        };
    },
    methods: {
        parseSearchString() {
            // Trim search string
            const trimmedSearchString = this.searchString.trim();

            if (trimmedSearchString !== "") {
                // Split search string
                const searchParams = trimmedSearchString.split(/\s+/);
                // Emit event
                this.$emit("search", searchParams);
                // Reset input field
                this.searchString = "";
            }
        },
    },
};
</script>

<style scoped>
input,
button {
    box-shadow: none !important;
    margin: auto;
}

.form-control {
    border-color: #6c757d;
    margin: auto;
}

.mb-5 {
    margin: auto;
}
</style>
