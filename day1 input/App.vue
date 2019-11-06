<template>
  <div id="app">
    <div class="input">
      <el-input placeholder="请输入内容" v-model="val" clearable></el-input>
      <el-button type="primary" @click="fn">添加</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期" width="180" prop="date"></el-table-column>
      <el-table-column label="内容" width="180" prop="content"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
      {{val}}
    </el-table>
    <!--
       弹出
    -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="日期">
          <el-date-picker v-model="datevalue" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="form.content" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="fn1">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
import Tab from "./components/Tab";
export default {
  data() {
    return {
      val: "",
      name:'',
      current: null,
      tableData: [
        {
          date: "2016-05-02",
          content: "张恒"
        }
      ],
      datevalue: "",
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        date: "",
        content: ""
      },
      name:''
    };
  },
  methods: {
    handleEdit(index, row) {   
      this.dialogFormVisible = true;
      this.datevalue = this.tableData[index].date;
      this.name = JSON.parse(JSON.stringify(row))
      this.form=this.name
      this.current = index;
    },
    handleDelete(index, row) {
      this.tableData.splice(index, 1);
    },
    fn() {
      let obj = {
        date: new Date().toLocaleString().split(' ')[0],
        content: this.val
      };
      this.tableData.push(obj);
      this.val = "";
    },
    fn1() {
      this.form.date = this.datevalue.toLocaleString().split(' ')[0].replace(/\//g,'-');
      this.tableData.splice(this.current, 1, this.form);
      this.dialogFormVisible = false;
    }
  },
  components: {
    Tab
  }
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  width: 500px;
  height: 700px;
  margin: 0 auto;
}
.input {
  display: flex;
  width: 500px;
}
.cell {
  display: flex;
}
</style>
