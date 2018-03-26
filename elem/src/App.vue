<template>
  <div id="app">
    <el-container>

      <el-header>
        <el-menu mode="horizontal" :default-active="activeIndex" @select="handleSelect">
          <el-menu-item index="1">实时监视</el-menu-item>
          <el-menu-item index="2">综合查询</el-menu-item>
          <el-menu-item index="3">统计分析</el-menu-item>
          <el-menu-item index="4">任务管理</el-menu-item>
          <el-menu-item index="5">数据管理</el-menu-item>
          <el-menu-item index="6">配置管理</el-menu-item>
        </el-menu>
      </el-header>

      <el-container>
        <el-aside width="200px">
          <el-menu :default-active="activeIndex2">

            <el-submenu index="1">
              <template slot="title">收发策略管理</template>
              <el-menu-item index="1-1">收集策略</el-menu-item>
              <el-menu-item index="1-2">分发策略</el-menu-item>
              <el-menu-item index="1-3">补调策略</el-menu-item>
              <el-menu-item index="1-4">分发到齐策略</el-menu-item>
            </el-submenu>

            <el-menu-item index="2">临时数据管理策略</el-menu-item>

            <el-menu-item index="3">数据库管理</el-menu-item>

            <el-menu-item index="4">监控策略观念里</el-menu-item>

            <el-submenu index="5">
              <template slot="title">元数据管理</template>
              <el-menu-item index="5-1">收集策略</el-menu-item>
              <el-menu-item index="5-2">分发策略</el-menu-item>
              <el-menu-item index="5-3">补调策略</el-menu-item>
              <el-menu-item index="5-4">分发到齐策略</el-menu-item>
            </el-submenu>
            
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
      </el-container>

    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "6",
      activeIndex2: "1-2"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
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
