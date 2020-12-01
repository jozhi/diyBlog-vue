<template>
  <div class="index">
    <h1>欢迎进入模板系统</h1>
  </div>
</template>

<style lang="less" scoped>
.index {
  padding-top:50px;
}
</style>

<script>
// @ is an alias to /src
export default {
  name: 'indexPage',
  data() {
    return {
      list: []
    };
  },
  created(){
      this.$api.post('/api/blog/list').then(function(data){
        console.log('data:',data);
      })
  },
  methods: {
    onSubmit(){
    }
  },
};
</script>