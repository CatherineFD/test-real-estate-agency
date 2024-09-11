<script>
import SideBar from "@/components/SideBar.vue";
import UserProfile from "@/components/UserProfile.vue";
import Loader from "@/components/UI/Loader.vue";

export default {
  name: "PageSearchUsers",
  components: {
    SideBar,
    UserProfile,
    Loader
  }
}
</script>

<template>
  <div class="container">
    <SideBar></SideBar>
    <UserProfile></UserProfile>
  </div>

</template>

<style scoped lang="scss">

  .container {
    max-width: 1340px;
    width: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: space-between;
    background-color: rgb(253, 253, 253);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;

  }

  @media(max-width: 1200px) {
    .container {
      max-width: 990px;
    }
  }

  @media (max-width: 992px) {
    .container {
      max-width: 760px;
    }
  }

  @media (max-width:  768px) {
    .container {
      max-width: 550px;
    }
  }

  @media (max-width:  556px) {
    .container {
      max-width: 100%;
      padding: 0 10px;
    }
  }
</style>