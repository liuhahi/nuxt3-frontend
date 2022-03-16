  <template>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <s-my-button size="small" @click="$emit('logout')" label="s my button"/>
      <el-button color="#626aef" plain>El button</el-button>
    </ul>
  </template>