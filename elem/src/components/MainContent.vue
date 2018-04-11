<template>
    <el-container>
        <el-aside width="200px">
            <el-menu :default-active="activeIndex2">
                subrouter
                <!-- <router-view></router-view> -->
            </el-menu>
        </el-aside>
        <el-main>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/tabs' }">配置管理</el-breadcrumb-item>
                <el-breadcrumb-item>收发策略管理</el-breadcrumb-item>
                <el-breadcrumb-item>分发策略</el-breadcrumb-item>
            </el-breadcrumb>
            
            <!-- <router-view/> -->
        </el-main>
    </el-container>
</template>

<script>
import MainRouter from "./components/MainRouter";

export default {
  name: "App",
  data() {},
  components: {
    MainRouter
  }
};
</script>

<style>

</style>
