<script>
export default {
  name: "CardUserInfo",
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
      <img src="@/assets/large-image.png" alt="image">
    </div>

    <div class="card__info">
      <div class="card__info__name">
        {{user.name}} {{user.username}}
      </div>
      <div class="card__info__position">
        <p>email: <span>{{user.email}}</span></p>
        <p>phone: <span>{{user.phone}}</span></p>
      </div>

      <div class="card__info__description">
        <h4>О себе:</h4>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias error eveniet harum iste quam reprehenderit soluta? Asperiores consequuntur cumque debitis deserunt eaque eius eligendi error, iure necessitatibus neque similique voluptatibus.</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  justify-content: space-between;

  &__image {
    width: 40%;
    img {
      width: 100%;
    }
  }

  &__info {
    margin-left: 60px;
    width: 60%;
    text-align: left;

    &__name {
      font-size: 16px;
      font-weight: 600;
      line-height: 22.4px;
      color: #000;
    }

    &__position {
      font-size: 14px;
      font-weight: 600;
      line-height: 19.6px;
      text-align: left;
      color: rgba(51, 51, 51, 1);

      & span {
        color: rgba(118, 120, 125, 1);
        font-weight: 400;
      }
    }

    &__description {
       h4 {
         font-size: 16px;
         font-weight: 600;
         line-height: 22.4px;
         color: rgba(51, 51, 51, 1);
       }

      p {
        font-size: 14px;
        font-weight: 400;
        line-height: 17.07px;
        color: rgba(118, 120, 125, 1);


      }
    }
  }
}
</style>