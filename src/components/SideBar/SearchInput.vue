<script>
import {mapActions} from "vuex";

export default {
  name: "SearchInput",
  data() {
    return {
      search: '',
      timeout: null,
    }
  },
  methods: {
    ...mapActions([ 'deleteAllUsers']),

    debouncedSearch() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        if (this.search.length > 0) {
          this.$emit('search', this.search)
        } else {
          this.deleteAllUsers();
        }
      }, 500);
    },
  },
}
</script>

<template>
  <div class="block">
    <h3 class="block__title">Поиск сотрудников</h3>
    <input type="text" v-model="search" @input="debouncedSearch" class="block__input" placeholder="Введите id или имя">
  </div>
</template>

<style scoped lang="scss">
.block {
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;

  &__title {
    font-size: 16px;
    font-weight: 600;
    line-height: 22.4px;
    text-align: left;
    color: rgba(51, 51, 51, 1);
    margin-bottom: 20px;
    margin-top: 0;
  }

  &__input {
    border: 1.5px solid #E0E0E0;
    padding: 16px 24px;
    border-radius: 8px;

    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
    color: rgba(118, 120, 125, 1);

  }
}
</style>