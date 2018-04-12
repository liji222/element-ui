<template>
    <div id="cs-sub-router">
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
                <template slot="title">
                    <span>收发策略管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">收集策略</el-menu-item>
                    <el-menu-item index="1-2">分发策略</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="2">
                <span slot="title">临时数据管理</span>
            </el-menu-item>

            <el-menu-item index="3">
                <span slot="title">数据库管理</span>
            </el-menu-item>

            <el-menu-item index="4">
                <span slot="title">元数据管理</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: "SubRouter",
  data() {
    return {
      routeParams: this.$route.params.module
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      //   console.log(key, keyPath);
      console.log(this.routeParams);
    },
    handleClose(key, keyPath) {
      //   console.log(key, keyPath);
    }
  }
};
</script>

<style>

</style>
