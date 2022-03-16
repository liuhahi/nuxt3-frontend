<template>
  <!-- <NuxtLink to="/">Home page</NuxtLink> -->
  <div class="background">
    <div class="left">
      <span class="Statistics">
        Statistics
      </span>
      <div class="Rectangle-96">
        <span class="Total-Records">
           Total Records
        </span>
      </div>
    </div>
    <div class="right">

    </div>
  </div>
</template>
<script setup>
  import 'element-plus/dist/index.css';
  // const { data } = await useFetch("api/hello");   
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.background {
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  background: linear-gradient(to left, #03d7bb, #066f97);
}
.Total-Records {
  font-family: Poppins;
  font-size: 32px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
}
.left{
  display: flex;
  flex-direction: column;
  width: 50%;
}
.Statistics {
  height: 48px;
  margin: 28px 192px 14px 0;
  font-family: Poppins;
  font-size: 32px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
}
.Rectangle-96 {
  padding: 17px 72px 20.5px 32px;
  border-radius: 20px;
  border: solid 1px #fff;
}
</style>