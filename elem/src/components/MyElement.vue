<template>
    <div class="demo">
        <div class="demo-list">
            <h4>单选按钮</h4>
            <div class="demo-item">
                <el-radio v-model="radio" label="1">选中</el-radio>
                <el-radio v-model="radio" label="2">备选</el-radio>
                <el-radio disabled v-model="radio1" label="禁用">禁用</el-radio>
                <el-radio disabled v-model="radio1" label="选中且禁用">选中且禁用</el-radio>
            </div>
        </div>

        <div class="demo-list">
            <h4>单选按钮组</h4>
            <div class="demo-item">
                <el-radio-group v-model="radio2">
                    <el-radio :label="3">备选项</el-radio>
                    <el-radio :label="6">备选项</el-radio>
                    <el-radio :label="9">备选项</el-radio>
                </el-radio-group>
            </div>
        </div>

        <div class="demo-list">
            <h4>按钮组</h4>
            <div class="demo-item">
                <el-radio-group v-model="radio3" size="medium">
                    <el-radio-button label="上海"></el-radio-button>
                    <el-radio-button label="北京"></el-radio-button>
                    <el-radio-button label="广州"></el-radio-button>
                    <el-radio-button label="深圳"></el-radio-button>
                </el-radio-group>
            </div>
        </div>

        <div class="demo-list">
            <h4>checkbox</h4>
            <div class="demo-item">
                <el-checkbox v-model="checked">备选项</el-checkbox>
            </div>
        </div>

        <div class="demo-list">
            <h4>多选框组</h4>
            <div class="demo-item">
                <el-checkbox-group v-model="checkList">
                    <el-checkbox label="复选框 A"></el-checkbox>
                    <el-checkbox label="复选框 B"></el-checkbox>
                    <el-checkbox label="复选框 C"></el-checkbox>
                    <el-checkbox label="禁用" disabled></el-checkbox>
                    <el-checkbox label="选中且禁用" disabled></el-checkbox>
                </el-checkbox-group>
            </div>
        </div>

        <div class="demo-list">
            <h4>输入框</h4>
            <div class="demo-item">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
        </div>

        <div class="demo-list">
            <h4>下拉菜单</h4>
            <div class="demo-item">
                <el-select v-model="dropValue" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.dropValue"
                            :label="item.label"
                            :value="item.dropValue">
                    </el-option>
                </el-select>
            </div>
        </div>

        <div class="demo-list">
            <h4>单选按钮</h4>
            <div class="demo-item">

            </div>
        </div>

        <div class="demo-list">
            <h4>单选按钮</h4>
            <div class="demo-item">

            </div>
        </div>

        <div class="demo-list">
            <h4>单选按钮</h4>
            <div class="demo-item">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                radio: '1',
                radio1: '选中且禁用',
                radio2: '3',
                radio3: '上海',
                checked: true,
                checkList: ['选中且禁用','复选框 A'],
                input: '龙珠激斗',
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                dropValue: ''
            };
        }
    }
</script>

<style>
    .demo{
        text-align: left;
    }
    .demo .demo-list{
        margin: 20px 20px 20px 0px;
    }
    .demo .demo-list h4{
        margin: 10px 0;
    }
    .demo .demo-item{
        margin: 0 0 0 40px;
    }
</style>
