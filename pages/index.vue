<template>
  <!-- <NuxtLink to="/">Home page</NuxtLink> -->
  <div class="wrapper">
    <div class="background">
      <div class="left">
        <span class="Statistics"> Statistics </span>
        <div class="Rectangle-96">
          <span class="Total-Records"> Total Records </span>
        </div>
      </div>
      <div class="right">
        <div>
          <img :src="config.SCANTIST_LOGO_PATH">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  const config = useRuntimeConfig();
</script>
<style scoped>
.wrapper {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to left, #03d7bb, #066f97);
}
.background {
  width: 100%;
  height: 100%;
  padding: 1rem;
  /* background: linear-gradient(to left, #03d7bb, #066f97); */
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
.left {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.Statistics {
  height: 48px;
  margin: 28px 192px 14px 0;
  font-family: "Poppins";
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
