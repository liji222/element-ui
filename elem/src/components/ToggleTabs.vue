<template>
        <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">

            <el-tab-pane v-for="(item, index) in initdata" :key="index" :label="item.strategyName" :name="item.strategyName">
                
                <my-form :msg="item"></my-form>

            </el-tab-pane>

        </el-tabs>
</template>

<script>
import MyForm from "./MyForm";

export default {
  data() {
    return {
      activeName: "",
      initdata: []
    };
  },
  methods: {
    handleClick(tab, event) {
      //   console.log(tab);
      //   console.log(this.initdata);
    }
  },
  mounted() {
    this.$axios.get("./static/strategy/getCollectStrategy.json").then(
      res => {
        // console.log(res);
        this.initdata = res.data;
        this.activeName = res.data[res.data.length - 1].strategyName;
      },
      error => {
        console.log(error);
      }
    );
  },
  components: {
    MyForm
  }
};
</script>

<style>

</style>
