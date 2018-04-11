<template>
  <div class="content">
    <el-table :data="tableData" stripe border @selection-change="handleSelectionChange">
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="date" label="日期" width="100"></el-table-column>
        <el-table-column prop="name" label="姓名" width="200"></el-table-column>
        <el-table-column prop="address" label="地址" width=""></el-table-column>
      </el-table>
    <el-button type="primary" @click="showData">GET</el-button>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  data() {
    return {
      tableData: [],
      multipleSelection: []
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    showData() {
      this.$axios.get("./static/test.json").then(
        res => {
          console.log(res);
          this.tableData = res.data;
        },
        error => {
          console.log(error);
        }
      );
    }
  },
  mounted() {
    this.$axios.get("./static/initdata.json").then(
      res => {
        console.log(res);
        this.tableData = res.data;
      },
      error => {
        console.log(error);
      }
    );
  }
};
</script>


