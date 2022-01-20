<template>
  <div class="login-popup">
    <div class="login-popup__wrap">
      <el-card shadow="always">
        <el-button
          size="small"
          icon="el-icon-close"
          circle
          @click="$emit('closePopUp')"
          class="login-popup__btn"
        ></el-button>
        <div class="login-popup__tabs">
          <el-radio-group v-model="isCollapse">
            <el-radio-button :label="false">Sign Up</el-radio-button>
            <el-radio-button :label="true">Sign In</el-radio-button>
          </el-radio-group>
        </div>

        <keep-alive>
          <component :is="componentName" />
        </keep-alive>
      </el-card>
    </div>
  </div>
</template>

<script>
import SignIn from "./SignIn.vue";
import SignUp from "./SignUp.vue";

export default {
  name: "LoginPopUp",
  components: {
    SignIn,
    SignUp,
  },
  data: () => ({
    isCollapse: true,
  }),
  computed: {
    componentName() {
      if (this.isCollapse) {
        return "SignIn";
      }
      return "SignUp";
    },
  },
};
</script>

<style lang="scss">
.login-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0005;
  overflow: scroll;
  &__wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 600px;
    width: 100%;
  }
  &__tabs {
    text-align: center;
  }
  button.login-popup__btn {
    position: absolute;
    top: 0;
    right: 0;
    margin: 25px 25px 0 0;
  }
}
</style>