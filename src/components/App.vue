<template>
  <div>App Root Component</div>
</template>

<script>
const { reactive, toRefs } = Vue;

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
