<template>
  <div id="app">
    <el-container>

      <main-router></main-router>

      <!-- <el-container>
        <el-aside width="200px">
          <el-menu :default-active="activeIndex2">
            <router-view></router-view>
          </el-menu>
        </el-aside>
        <el-main>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/tabs' }">配置管理</el-breadcrumb-item>
            <el-breadcrumb-item>收发策略管理</el-breadcrumb-item>
            <el-breadcrumb-item>分发策略</el-breadcrumb-item>
          </el-breadcrumb>
          
          <router-view/>
        </el-main>
      </el-container> -->

    </el-container>
  </div>
</template>

<script>
import MainRouter from "./components/MainRouter";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    MainRouter
  }
};
</script>

<style>
.content {
  margin: 20px;
}
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /*margin-top: 60px;*/
}
* {
  margin: 0;
  padding: 0;
}
</style>
