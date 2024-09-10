<script>
export default {
  name: "CardUserForSearch",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="card">
    <div class="card__image">
      <img src="../../assets/image.png" alt="image">
    </div>
    <div class="card__info">
      <p class="card__name">{{user.username}}</p>
      <p class="card__email">{{user.email}}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  align-items: center;
  border: 1.5px solid #E0E0E0;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 18px;

  &__info {
    padding: 15px;
    text-align: left;

    p {
      margin: 0;
    }
  }


  &__name {
    font-size: 14px;
    font-weight: 600;
    line-height: 17.07px;
    color: #333333;
    margin-bottom: 5px;
  }

}

</style>