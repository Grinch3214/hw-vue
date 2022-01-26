<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
    <el-form-item label="Login" prop="login">
      <el-input v-model.trim="ruleForm.login" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="pass">
      <el-input
        type="password"
        v-model="ruleForm.pass"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item style="text-align: center">
      <el-button type="primary" @click="submitForm('ruleForm')"
        >Sign In</el-button
      >
      <el-button @click="resetForm('ruleForm')">Reset</el-button>
    </el-form-item>
    <p :class="{ 'wrong-message': wrongMessage, 'success-msg': successMsg }">{{ wrongMessage || successMsg }}</p>
  </el-form>
</template>

<script>
export default {
  name: "SignIn",
  props:{
    usersUsernames: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        callback();
      }
    };
    const validateLogin = (rule, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      if (!value) {
        return callback(new Error("Please input email address"));
      }
      setTimeout(() => {
        if (mailReg.test(value)) {
          callback();
        } else {
          callback(new Error("Please enter the correct email format"));
        }
      }, 100);
    };
    return {
      ruleForm: {
        pass: "",
        login: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        login: [{ validator: validateLogin, trigger: "blur" }],
      },
      currentUser: null,
      currentPass: null,
      wrongMessage: null,
      successMsg: null
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.fetchAsync()
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    async fetchAsync() {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/vqwb2m3eqp5ai');
        const data = await response.json();

        for (let i = 0; i < this.usersUsernames.length; i++) {
          if(this.ruleForm.login === this.usersUsernames[i]) {
            this.currentUser = this.usersUsernames[i]
            if(this.ruleForm.pass === data[i].pass) {
              this.currentPass = data[i].pass
              break
            }
          }
        }

        if(!this.currentUser) {
          this.wrongMessage = 'Not existing login'
        } else if (!this.currentPass) {
          this.wrongMessage = 'Wrong password. Try again!'
        } else {
          this.wrongMessage = null
          this.successMsg = `Hello ${this.currentUser}`
        }
      } catch (e) {
        console.warn('Ошибка: ' ,e)
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss">
  .wrong-message, .success-msg {
    color: #f56c6c;
    text-align: center;
    padding: 5px 8px;
    border-radius: 15px;
  }
  .success-msg {
    color: #67c23a;
  }
</style>