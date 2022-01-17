<template>
  <div class="app-pop-up">
    <el-card shadow="always">
      <div class="header">
        <h3>This is title</h3>
        <el-button
          size="mini"
          type="info"
          icon="el-icon-close"
          circle
          @click="$emit('closePopUpEvent')"
          class="app-pop-up__btn"
        ></el-button>
      </div>
      <div class="main">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
        cupiditate, voluptate amet quae repellendus necessitatibus, vel ab
        ducimus assumenda quam animi, aspernatur quia reiciendis tenetur ipsa
        aperiam laborum unde esse.
      </div>
      <div class="footer">
        <el-button
          @click="$emit('backPopUpEvent')"
          type="primary"
          icon="el-icon-arrow-left"
          >Back</el-button
        >
        <el-button @click="$emit('continuePopUpEven')" type="primary"
          >Continue<i class="el-icon-arrow-right"></i
        ></el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "AppPopUp",
  components: {},
};
</script>

<style lang="scss" scoped>
.app-pop-up {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 300px;
  &__btn {
    position: absolute;
    top: 0;
    right: 0;
    margin: 13px 13px 0 0;
  }
}
.header {
  text-align: center;
  padding-bottom: 12px;
  font-size: 16px;
  h3 {
    font-weight: 700;
  }
}
.main {
  padding: 10px 0;
  text-align: justify;
}
.footer {
  font-size: 12px;
  text-align: center;
  padding-top: 10px;
}
</style>