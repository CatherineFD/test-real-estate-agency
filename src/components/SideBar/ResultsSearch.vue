<script>
import {mapActions, mapGetters} from "vuex";
import CardUser from "@/components/SideBar/CardUserForSearch.vue";
import Loader from "@/components/UI/Loader.vue";

export default {
  name: "ResultsSearch",
  components: {
    Loader,
    CardUser,
  },
  data() {
    return {
      pagination: {
        upperBound: 0,
        lowerBound: 20
      }
    }
  },
  computed: {
    ...mapGetters({getUsers: 'getUsers', error: 'getIsError', isLoading: 'getIsLoading'}),
    isUsers() {
      return this.getUsers.length > 0
    }
  },
  methods: {
    ...mapActions(['setUser']),
    showInfoUser(user) {
      this.setUser(user);
    }
  }
}
</script>

<template>
  <div class="block">
    <h3 class="block__title">Результат поиска</h3>

    <Loader v-if="isLoading"></Loader>

    <div v-else>
      <div v-if="isUsers" class="block__results">
        <div v-for="user in getUsers" :key="user.id">
          <CardUser :user="user" @click="showInfoUser(user)"></CardUser>
        </div>
      </div>

      <div v-else class="block__message">
        <p v-if="!error.isError">начните поиск</p>
        <p v-else>{{ error.message }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.block {

  &__title {
    font-size: 16px;
    font-weight: 600;
    line-height: 22.4px;
    text-align: left;

    color: rgba(51, 51, 51, 1);
    margin-bottom: 18px;
    margin-top: 0;
  }

  &__results {

  }

  &__message {
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
    text-align: left;
    color: rgb(118, 120, 125);

  }
}
</style>