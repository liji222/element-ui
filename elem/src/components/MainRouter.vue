<template>
    <div id="cs-main-router">
        <el-header>
            <el-menu mode="horizontal" router :default-active="activeMainRoutes" @select="handleSelect">

                <el-menu-item 
                    v-for="data in initRoutData" 
                    :key="data.mainRouterId" 
                    :name="data.mainRouterName"
                    :index="data.mainRouterId">
                    {{ data.mainRouterName }}
                </el-menu-item>

            </el-menu>
        </el-header>

        <el-container>
            <el-aside width="200px">
                <el-menu :default-active="activeSubRoutes">
                    <router-view></router-view>
                </el-menu>
            </el-aside>
            
        </el-container>
    </div>
</template>

<script>
export default {
  name: "MainRouter",
  data() {
    return {
      initRoutData: [],
      activeMainRoutes: "config",
      activeSubRoutes: ""
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    }
  },
  mounted() {
    this.$axios.get("./static/api/mainRouter.json").then(
      res => {
        this.initRoutData = res.data;
      },
      error => {
        console.log(error);
      }
    );
  }
};
</script>

<style>

</style>
