<template>
  <div class="login-container">
    <el-form ref="formRef" :model="form" class="login-form" :rules="rules">
      <div class="title-container">
        <h3 class="title">{{ $t('login.title') }}</h3>
      </div>
      <el-form-item prop="username">
        <el-input v-model="form.username" :prefix-icon="User" placeholder='用户名'></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          :prefix-icon="Lock"
          :type="passwordType"
          placeholder="密码"
          @keyup.enter="handleLogin"></el-input>
        <svg-icon
          :icon="passwordType === 'password' ? 'eye' : 'eye-open'"
          @click="changeType"
          style="position: absolute; margin-left: 95%; cursor: pointer;"
        ></svg-icon>
      </el-form-item>
      <el-button type="primary" class="login-button" @click="handleLogin">{{ $t('login.btnTitle') }}</el-button>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { User, Lock } from '@element-plus/icons-vue'
const store = useStore()
const form = ref({
  username: '',
  password: ''
})

const rules = ref({
  username: [
    {
      required: true,
      message: '请输入用户名！',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码！',
      trigger: 'blur'
    }
  ]
})

const formRef = ref(null)
const handleLogin = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      store.dispatch('app/login', form.value)
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const passwordType = ref('password')
const changeType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
      &__content {
        display: flex;
        flex-wrap: nowrap;
      }
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;

      &__wrapper {
        width: 100%;
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
    .login-button {
      width: 100%;
      box-sizing: border-box;
    }
  }

  .tips {
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    ::v-deep .lang-select {
      position: absolute;
      top: 4px;
      right: 0;
      background-color: white;
      font-size: 22px;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .show-pwd {
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
