<template>
  <div class="index">
    <h3>欢迎来</h3>
    <ul class="cont">
      <li v-for="option in list" :key='option.id'>
        <strong>{{option.menu_name}}</strong>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.index { }
.cont{
  li{
    border-bottom: 1px solid #efefef;
  }
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
    const self = this;
    this.$api.get('/api/blog/list').then(data =>{
      console.log('/api/blog/list data:',data);
      if(data.success){
        self.list = data.data
      }
    })
  },
  methods: {
    onSubmit(){
    }
  },
};
</script>