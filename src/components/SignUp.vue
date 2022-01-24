<template>
  <div>
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
      <el-form-item label="Repeat password" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button type="primary" @click="submitForm('ruleForm')"
          >Sign Up</el-button
        >
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
      <p :class="{ 'wrong-message': wrongMessage, 'success-msg': successMsg }">{{ wrongMessage || successMsg }}</p>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    const validateCheckPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("Two inputs don't match!"));
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
      currentUser: null,
      wrongMessage: null,
      successMsg: null,
      ruleForm: {
        pass: "",
        checkPass: "",
        login: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validateCheckPass, trigger: "blur" }],
        login: [{ validator: validateLogin, trigger: "blur" }],
      },
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

        for (let i = 0; i < data.length; i++) {
          if(this.ruleForm.login === data[i].login) {
            this.currentUser = data[i].login
            break
          }
        }

        if(this.currentUser) {
          console.log('User with this login exists')
          this.wrongMessage = 'User with this login exists'
        } else if (!this.currentUser && this.ruleForm.pass === '') {
          console.log('Please enter your password')
          this.wrongMessage = 'Please enter your password'
        } else if (!this.currentUser && this.ruleForm.checkPass === '') {
          console.log('Please enter your password again')
          this.wrongMessage = 'Please enter your password again'
        } else if(!this.currentUser && this.ruleForm.pass !== this.ruleForm.checkPass) {
          console.log('You entered different passwords. Please edit them and try again.')
          this.wrongMessage = 'You entered different passwords. Please edit them and try again.'
        } else {
            await (await fetch ('https://sheetdb.io/api/v1/vqwb2m3eqp5ai', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                ruleForm: this.ruleForm
              })
            })).json()
            this.successMsg = 'Registration was successful. Welcome!'
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