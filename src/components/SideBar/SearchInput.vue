<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "SearchInput",
  data() {
    return {
      search: '',
      timeout: null,
    }
  },
  computed: {
    ...mapGetters({getUsers: 'getUsers'}),
  },
  methods: {
    ...mapActions(['getUsersByUsername']),

    onSearch() {
      this.getUsersByUsername(this.search)
    },
    debouncedSearch() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.onSearch();
      }, 500);
    },
  }
}
</script>

<template>
  <div>
    <h3>Поиск сотрудников</h3>
    <input type="text" v-model="search" @input="debouncedSearch" class="input">

  </div>
</template>

<style scoped lang="scss">
.input {
  border: 1.5px solid #E0E0E0;
  padding: 16px 24px;
  border-radius: 8px;
}
</style>