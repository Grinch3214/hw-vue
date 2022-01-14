<template>
  <div class="app-pop-up">
      <el-card shadow="always">
        <div class="header">
            <el-button
                size="mini"
                type="danger"
                icon="el-icon-close"
                circle
                @click="$emit('closePopUpEvent')"
            ></el-button>
        </div>
        <div class="main">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti cupiditate, voluptate amet quae repellendus necessitatibus, vel ab ducimus assumenda quam animi, aspernatur quia reiciendis tenetur ipsa aperiam laborum unde esse.
        </div>
        <div class="footer">@footer</div>
      </el-card>
  </div>
</template>

<script>

export default {
  name: 'AppPopUp',
  components: {
  },
};
</script>

<style lang="scss" scoped>
    .app-pop-up {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 300px;
    }
    .header {
        text-align: right;
        padding-bottom: 12px;
    }
    .main {
        padding: 10px 0;
    }
    .footer {
        font-size: 12px;
        text-align: center;
    }

</style>