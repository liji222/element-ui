<template>
<div>
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
import axios from "axios";

export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address:
            "上海市普陀区金沙江路 1518 弄 杀戮空间发啊阿吉拉废旧塑料防守打法啥地方撒豆分身斧就说的"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    showData() {
      axios
        .get("./static/test.json")
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>


