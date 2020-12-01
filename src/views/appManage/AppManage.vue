<template>
  <div class="AppManage">
    <div class="titlePart cf">
      <!-- <span class="searchBox">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </span> -->
      <strong class="h1">新增文章</strong>
    </div>
    <div class="contPart">
      <el-form ref="form" :model="form">
        <el-form-item label="标题">
          <el-input v-model="form.title" placeholder="标题"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input type="textarea" v-model="form.content" placeholder="内容"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="less" scope>
.AppManage {
  height: 100%;
}
.titlePart {
  .searchBox {
    width: 300px;
    float: right;
  }
}
.contPart {
  margin-bottom: 10px;
  .creatApp {
    display: inline-block;
    margin: 20px 0 5px;
    color: #02a7f0;
    font-size: 18px;
  }
}
.svgIcon {
  width: 30px;
  height: 30px;
  color: #666;
}
</style>


<script>
// @ is an alias to /src
export default {
  name: 'AppManage',
  data() {
    return {
      form: {
        title: '',
        content: '',
      },
    };
  },
  methods: {
    onSubmit(){
      console.log('this.form,',JSON.stringify(this.form));
      // api/blog/new
      this.$api.post('/api/blog/new',this.form).then(function(data){
        console.log('data:',data);
      })
    }
  },
};
</script>
