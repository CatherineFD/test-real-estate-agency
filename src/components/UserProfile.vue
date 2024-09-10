<script>
import {mapGetters} from "vuex";
import CardUserInfo from "@/components/UserProfile/CardUserInfo.vue";

export default {
  name: "UserProfile",
  components: {
    CardUserInfo
  },
  data() {
    return {
      message: 'Выберите сотрудника, чтобы посмотреть его профиль',
    }
  },
  computed: {
    ...mapGetters({user: 'getUser'}),
    isShowUser() {
      return Object.keys(this.user).length === 0;
    }
  }
}
</script>

<template>
  <div class="user-profile">
    <div v-if="!isShowUser">
      <CardUserInfo :user="user"></CardUserInfo>
    </div>
    <div v-else class="user-profile__message">
      {{message}}
    </div>

  </div>
</template>

<style scoped lang="scss">
  .user-profile {
    width: 70%;
    border-left: 1px solid rgba(222, 222, 221, 1);
    border-radius: 0 10px 10px 0;
    background-color: #fff;
    padding: 30px 21px;

    &__message {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: 14px;
      font-weight: 400;
      line-height: 17.07px;
      color: rgba(118, 120, 125, 1)
    }
  }
</style>