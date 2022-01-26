<template>
  <div>
    <el-button @click="$emit('appButtonClick')">
      {{ appButtonText }}
    </el-button>
  </div>
</template>

<script>
export default {
  name: "AppButton",
  components: {},
  props: ["appButtonText"],
};
</script>