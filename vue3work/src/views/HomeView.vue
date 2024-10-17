<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <mz-demo-com color="blue"></mz-demo-com>
    <span @click="handle">点击</span>
    <el-upload
      v-model:file-list="fileList"
      class="upload-demo"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
    >
      <el-button type="primary">Click to upload</el-button>
      <template #tip>
        <div>
          <el-icon size="16"><WarningFilled /></el-icon>
          <span
            >在天台咋地十分大方啊收到回复哈斯u的阿斯顿放假啊诶u未婚夫iu我啊是大舅和罚款文化</span
          >
        </div>
      </template>
    </el-upload>

    <el-form
      ref="myTest"
      style="max-width: 600px"
      :model="ruleForm"
      :rules="rules"
      label-width="auto"
      class="demo-ruleForm"
    >
      <el-form-item label="Activity name" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="Activity zone" prop="region">
        <el-select v-model="ruleForm.region" placeholder="Activity zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <el-button @click="saveHandler">保存</el-button>
    <el-button @click="submitHandler"> 提交 </el-button>
    <div class="wrapper">
      <div class="scroll-wrapper">
        <div
          lazyload="xxxx"
          v-for="item in 50"
          :key="item"
          class="scroll-item"
        ></div>
        <div id="wrapperId"></div>
      </div>
    </div>
    <div style="height: 600px"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref, computed, onMounted } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Test from "./test.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
  setup() {
    const showDialog = ref(false);
    const myTest = ref();
    const fileList = ref([]);
    const ruleForm = ref({
      name: "xxx",
      region: "",
    });
    const handle = () => {
      // showDialog.value = !showDialog.value;
      myTest.value.delSelectionChange({});
    };

    // 创建监听方法
    const watchObserve = () => {
      const observe = new IntersectionObserver((entrys) => {
        entrys.forEach((item) => {
          console.log(item, "item");
        });
      });
      // const targetDom: any = document.querySelectorAll("[lazyload]");
      const targetDom = document.getElementsByClassName("scroll-item");
      // const targetDom = document.getElementById("wrapperId") as HTMLElement;
      // observe.observe(targetDom);
      Array.prototype.forEach.call(targetDom, ($item) => {
        observe.observe($item); // 开始观察
      });
    };

    onMounted(() => {
      nextTick(() => {
        watchObserve();
      });
    });

    const subType = ref("submit");

    // 默认是最多的
    const rules = computed(() => {
      if (subType.value === "submit") {
        return {
          name: [
            { required: true, message: "请输入活动名称", trigger: "blur" },
            {
              min: 3,
              max: 5,
              message: "长度在 3 到 5 个字符",
              trigger: "blur",
            },
          ],
          region: [
            { required: true, message: "请输入活动名称", trigger: "blur" },
          ],
        };
      } else {
        return {
          name: [
            { required: true, message: "请输入活动名称", trigger: "blur" },
          ],
        };
      }
    });

    // 保存
    const saveHandler = () => {
      subType.value = "save";
      nextTick(() => {
        myTest.value.validate((valid: any) => {
          if (valid) {
            alert("save!");
          } else {
            console.log("error save!!");
            return false;
          }
        });
      });
    };
    // 保存
    const submitHandler = () => {
      subType.value = "submit";
      nextTick(() => {
        myTest.value.validate((valid: any) => {
          if (valid) {
            alert("submit!");
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      });
    };
    // 提交

    return {
      showDialog,
      submitHandler,
      handle,
      saveHandler,
      rules,
      fileList,
      ruleForm,
      myTest,
    };
  },
});
</script>

<style lang="scss">
.wrapper {
  width: 400px;
  background-color: aqua;
  height: 400px;
  overflow: auto;
  .scroll-wrapper {
    background-color: bisque;
    .scroll-item {
      height: 50px;
      background-color: brown;
      margin-bottom: 10px;
    }
    #wrapperId {
      height: 200px;
      background-color: black;
    }
  }
}
</style>
