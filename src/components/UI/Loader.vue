<script>
export default {
  name: "Loader"
}
</script>

<template>
  <div class="block">
    <div class="loader"></div>
  </div>
</template>

<style scoped lang="scss">
.block {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  width: 50px;
  aspect-ratio: 1;
  --_c:no-repeat radial-gradient(farthest-side, rgba(227, 31, 36, 1) 92%,#0000);
  background:
      var(--_c) top,
      var(--_c) left,
      var(--_c) right,
      var(--_c) bottom;
  background-size: 12px 12px;
  animation: l7 1s infinite;
}
@keyframes l7 {to{transform: rotate(.5turn)}}

</style>