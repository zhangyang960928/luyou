<template>
  <div>
    <button @click='goTo'>回到首页</button>
    我是home传来的数据：{{msg}}
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      msg: "",
    };
  },
  components: {},
  methods: {
    goTo() {
      this.$router.back()
    }
  },
  mounted() {
    // this.msg = this.$route.query.msg;
    this.msg=this.$route.params.msg
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>