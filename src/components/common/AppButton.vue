<template>
  <div>
    <el-button @click="$emit('appButtonClick')">App Button</el-button>
  </div>
</template>

<script>
export default {
  name: "AppButton",
  components: {},
};
</script>