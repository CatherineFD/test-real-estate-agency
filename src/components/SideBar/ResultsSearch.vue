<script>
import {mapGetters} from "vuex";
import CardUser from "@/components/SideBar/CardUserForSearch.vue";

export default {
  name: "ResultsSearch",
  components: {
    CardUser
  },
  computed: {
    ...mapGetters({getUsers: 'getUsers'}),
  }
}
</script>

<template>
  <div>
    <h3>Результат поиска</h3>

    <div v-for="user in getUsers" :key="user.id">
      <CardUser :user="user"></CardUser>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>