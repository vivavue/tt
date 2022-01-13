<template>
  <div>
    <h1>houses</h1>
    <div v-if="loading" class="text-center mt-5 mb-5">
      <div class="spinner-border text-primary" role="status"></div>
    </div>
    <div class="text-center mt-5 mb-5" v-if="is_null">
      <h2>no data</h2>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: true,
    is_null: false,
  }),
};
</script>
