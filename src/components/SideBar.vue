<script>
import SearchInput from "@/components/SideBar/SearchInput.vue";
import ResultsSearch from "@/components/SideBar/ResultsSearch.vue";
export default {
  name: "SideBar",
  components: {
    SearchInput,
    ResultsSearch
  }
}
</script>

<template>
  <div class="sidebar">
    <SearchInput></SearchInput>
    <ResultsSearch></ResultsSearch>
  </div>

</template>

<style scoped lang="scss">
.sidebar {
  width: 30%;
  margin: 27px 20px 27px 30px;
}
</style>