<script>
export default {
  name: "Header"
}
</script>

<template>
  <div class="header">
    <h1 class="header__title">Жилфонд</h1>
    <p class="header__subtitle">Пользователь</p>
  </div>
</template>

<style scoped lang="scss">
.header {
  max-width: 1340px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 25px;

  &__title {
    margin: 0;
    font-size: 32px;
    font-weight: 700;
    line-height: 39.01px;
    text-align: left;
    color: rgba(227, 31, 36, 1);
  }

  &__subtitle {
    font-size: 16px;
    font-weight: 400;
    line-height: 19.5px;
    text-align: left;
    color: rgba(51, 51, 51, 1);

  }
}

@media(max-width: 1200px) {
  .header {
    max-width: 960px;
  }
}

@media (max-width: 992px) {
  .header {
    max-width: 720px;
  }
}

@media (max-width:  768px) {
  .header {
    max-width: 540px;
  }
}

@media (max-width:  556px) {
  .header {
    max-width: 100%;
    padding: 0 10px;
  }
}

</style>