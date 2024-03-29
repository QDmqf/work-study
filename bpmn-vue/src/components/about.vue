<template>
  <div>
    <el-input
      v-model="keyData.input1"
      style="width: 240px"
      placeholder="输入2"
    />
    <el-input
      v-model="keyData.input"
      style="width: 240px"
      placeholder="输入1"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  keyData: {
    type: Object,
    default: () => {
      return {
        input1: "",
        input: "",
      };
    },
  },
});
const input = ref("");
const obj = ref({
  input1: "",
  input: "",
});
const getInpuVal = () => {
  return props.keyData;
};
defineExpose({ getInpuVal });
</script>
