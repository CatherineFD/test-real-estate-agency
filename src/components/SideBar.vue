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
  <div>
    <SearchInput></SearchInput>
    <ResultsSearch></ResultsSearch>
  </div>

</template>

<style scoped lang="scss">

</style>