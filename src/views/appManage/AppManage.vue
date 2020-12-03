<template>
  <div class="AppManage">
    <div class="titlePart cf">
      <strong class="h1">新增文章</strong>
    </div>

    <div class="contPart">
      <el-form ref="form" :model="form">

        <el-form-item class="selectWrap" label="父级菜单">
          <el-select v-model="form.parent_menu_id" placeholder="请选择">
            <el-option v-for="item in list" :key="item.menu_id" :label="item.menu_name" :value="item.menu_id"> </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="标题">
          <el-input v-model="form.article_title" placeholder="标题"></el-input>
        </el-form-item>

        <el-form-item label="内容">
          <div class="editorWrap">
            <editor v-model="form.article_content" @change="change"></editor>
          </div>
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

  .titlePart {
    .searchBox {
      width: 300px;
      float: right;
    }
  }
  .contPart {
    margin-bottom: 10px;
      .el-form-item__label {
        float: none;
      }
    .editorWrap {
      width: 100%;
    }
  }
}
</style>


<script>
// @ is an alias to /src
export default {
  name: 'AppManage',
  data() {
    return {
      list: [],
      form: {
        parent_menu_id: '',
        article_title: '',
        article_content: '',
      },
    };
  },
  created() {
    this.$api.get('/api/blog/list').then((data) => {
      console.log('/api/blog/list data:', data);
      if (data.success) {
        this.list = data.data;
        console.log(('self.list', self.list));
      }
    });
  },
  methods: {
    onSubmit() {
      console.log('this.form,', JSON.stringify(this.form));
      // api/blog/new
      this.$api.post('/api/blog/new', this.form).then(function (data) {
        console.log('data:', data);
      });
    },
    change(val) {
      console.log(val);
    },
  },
};
</script>
