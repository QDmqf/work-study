<template>
  <div class="main">
    <h4>Vue3表单验证</h4>

    <form class="form-box">
      <div class="form-group">
        <label class="label">账号</label>
        <input
          v-model="formData.account"
          @blur="accountBlur"
          type="text"
          class="input"
          placeholder="请输入账号"
        />
      </div>
      <div class="form-group">
        <label class="label">密码</label>
        <input
          tyep="password"
          @blur="passwordBlur"
          type="text"
          v-model="formData.password"
          placeholder="请输入密码"
          class="input"
        />
      </div>

      <div class="form-group">
        <button class="btn" @click="submit">保存</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Schema from "async-validator";

const formData = ref({
  account: null,
  password: null,
});

const rules = {
  account: { required: true, message: "请输入账号" },
  password: { required: true, message: "请输入密码" },
};

const validator = new Schema(rules);

const accountBlur = () => {
  validator.validate({ account: formData.value.account }, (error, field) => {
    console.log(error, field);
    return error;
  });
};
const passwordBlur = () => {
  validator.validate({ password: formData.value.password }, (error, field) => {
    console.log(error, field);
    return error;
  });
};
const submit = (e) => {
  e.preventDefault();

  // validator.validate(formData.value, (error, field) => {
  //   console.log(error, field);
  // });
  validator
    .validate(formData.value)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
</script>
<style scoped>
.main {
  text-align: center;
}
.btn {
  margin: 0;
  line-height: 1;
  padding: 15px;
  height: 30px;
  width: 60px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background-color: #2080f0;
  white-space: nowrap;
  outline: none;
  position: relative;
  border: none;
  display: inline-flex;
  flex-wrap: nowrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  user-select: none;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
}
.form-box {
  width: 500px;
  max-width: 100%;
  margin: 0 auto;
  padding: 10px;
}
.form-group {
  margin: 10px;
  padding: 10px 15px 10px 0;
}
.label {
  padding-right: 10px;
  padding-left: 10px;
  display: inline-block;
  box-sizing: border-box;
  width: 110px;
  text-align: right;
}

.input {
  width: calc(100% - 120px);
  height: 28px;
}
.form-group {
  margin: 2px;
  padding: 10px 15px 3px 0;
  height: 57px;
  transition: color 0.3s ease;
}
</style>
