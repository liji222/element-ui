<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>

        <el-form ref="form" :model="form" label-width="80px">

        <el-form-item label="策略名称">
            <el-input v-model="form.strategyName"></el-input>
        </el-form-item>

        <el-form-item label="数据形态">
            <el-radio-group v-model="form.datatype">
                <el-radio label="文件"></el-radio>
                <el-radio label="字符串"></el-radio>
                <el-radio label="流"></el-radio>
            </el-radio-group>
        </el-form-item>

        <el-form-item label="收集方式">
            <el-select v-model="form.collectType" placeholder="请选择收集方式">
                <el-option label="通知" value="通知"></el-option>
                <el-option label="轮询" value="轮询"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="是否考核">
            <el-radio-group v-model="form.examin">
                <el-radio label="是(进行收集统计)"></el-radio>
                <el-radio label="否"></el-radio>
            </el-radio-group>
        </el-form-item>

        <el-form-item label="数据内部分发">
            <el-checkbox-group v-model="form.dataSystem">
                <el-checkbox name="" label="数据存储管理系统"></el-checkbox>
                <el-checkbox name="" label="综合分析应用基础框架"></el-checkbox>
                <el-checkbox name="" label="数据加工处理系统"></el-checkbox>
                <el-checkbox name="" label="业务协同平台"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>

        <el-form-item>
            <el-button @click="onSubmit">保存</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
    </div>

</template>

<script>
export default {
  data() {
    return {
      activeName: "second",
      form: {
        strategyName: "",
        datatype: "",
        collectType: "",
        examin: "",
        dataSystem: []
      },
      initdata: []
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      console.log(this.form);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {
    this.$axios.get("./static/strategy/getCollectStrategy.json").then(
      res => {
        console.log(res);
        this.initdata = res.data;
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
