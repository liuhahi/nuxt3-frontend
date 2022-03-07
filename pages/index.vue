<template>
  <NuxtLink to="/">Home page</NuxtLink>
  {{ data }}
</template>
<script setup>
  import 'element-plus/dist/index.css';
  const { data } = await useFetch("api/hello");   
</script>