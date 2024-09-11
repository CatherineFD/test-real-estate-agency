<script>
import SearchInput from "@/components/SideBar/SearchInput.vue";
import ResultsSearch from "@/components/SideBar/ResultsSearch.vue";
import Pagination from "@/components/SideBar/Pagination.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "SideBar",
  components: {
    SearchInput,
    ResultsSearch,
    Pagination
  },
  data() {
    return {
      searchParam: '',
    }
  },
  methods: {
    ...mapActions(['getUsersByUsername', 'deleteAllUsers', 'getUsersById']),
    onSearch(search) {
      if (search) {
        this.searchParam = search;
      }

      const items = this.searchParam.split(',').map(item => item.trim());
      const allAreNumbers = items.every(item => !isNaN(item));

      if (allAreNumbers) {
        const ids = items.map(Number);
        this.getUsersById({search: ids, limit: this.infoPages.limit, page: this.infoPages.page});
      } else {
        this.getUsersByUsername({search: items, limit: this.infoPages.limit, page: this.infoPages.page});
      }
    },
  },
  computed: {
    ...mapGetters({infoPages: 'getInfoPage'}),
  }
}
</script>

<template>
  <div class="sidebar">
    <SearchInput @search="onSearch"></SearchInput>
    <ResultsSearch></ResultsSearch>
    <Pagination @changePage="onSearch"></Pagination>
  </div>

</template>

<style scoped lang="scss">
.sidebar {
  width: 30%;
  padding: 27px 20px 27px 30px;
  height: 80vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}
</style>