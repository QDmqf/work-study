<script setup>
import { ref, onMounted } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

const list = ref([{}]);

const add = () => {
  list.value.push({});
};
</script>

<template>
  <div v-for="(item, index) in list" :key="index">
    <HelloWorld msg="Vite + Vue" :keyData="index" />
  </div>
  <el-button @click="add">add</el-button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
