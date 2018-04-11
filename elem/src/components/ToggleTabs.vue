<template>
    <div class="content">
        <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">

            <el-tab-pane v-for="(item, index) in initdata" :key="index" :label="item.strategyName" :name="item.strategyName">
                
                <my-form :msg="item"></my-form>

            </el-tab-pane>

            <el-button @click="add()">添加策略</el-button>           

        </el-tabs>
    </div>
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
      // console.log(tab);
      // console.log(event);
      // console.log(this.initdata);
    },
    add() {
      alert("add new tab");
      console.log(this.initdata);
      this.initdata.push({
        strategyName: "",
        datatype: "",
        collectType: "",
        examin: "",
        dataSystem: []
      });
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
