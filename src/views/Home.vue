<template>
  <div>
    <div>
      <button @click='goTO'>跳转详情页</button>
      <button @click='out'>退出</button>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      msg:'我是home的数据'
    }
  },
  components: {},
  methods: {
    goTO () {
      // this.$router.push({
      //   path:'/xian',
      //   query:{
      //     msg:this.msg,
      //   }
      // })


      this.$router.push({
        name:'Xian',
        params:{
          msg:this.msg,
        }
      })
    },
    out () {
      localStorage.removeItem('vue-user')
      this.$router.push('/login')
    }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>
