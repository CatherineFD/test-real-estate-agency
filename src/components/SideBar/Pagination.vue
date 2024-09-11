<script>
import {mapActions, mapGetters} from "vuex";
export default {
  name: "Pagination",
  methods: {
    ...mapActions(['changePage']),
    nextPage() {
      if (this.infoPages.page < this.infoPages.totalPages) {
        this.changePage(this.infoPages.page + 1);
        this.$emit('changePage');
      }
    },
    prevPage() {
      if (this.infoPages.page > 1) {
        this.changePage(this.infoPages.page - 1);
        this.$emit('changePage');
      }
    },
    goToPage(page) {
      this.changePage(page);
      this.$emit('changePage');
    }
  },
  computed: {
    ...mapGetters({infoPages: 'getInfoPage'}),
  }
}
</script>

<template>
  <div class="pagination" v-if="infoPages.totalPages > 1">
    <button @click="prevPage" :disabled="this.infoPages.page === 1">Previous</button>
    <button
        v-for="page in infoPages.totalPages"
        :key="page"
        @click="goToPage(page)"
        :class="{ active: infoPages.page === page }"
    >
      {{ page }}
    </button>

    <button @click="nextPage" :disabled="this.infoPages.page === infoPages.totalPages">Next</button>
  </div>

</template>

<style scoped lang="scss">
.pagination {
  width: 100%;

  & button {
    background-color: #fff;
    border: 1px solid rgba(222, 222, 221, 1);
    border-radius: 3px;
    padding: 5px 10px;
    margin-right: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: border-color 0.3s ease-in;

    &.active,
    &:hover {
      border-color: rgb(227, 31, 36);
    }
  }
}
</style>