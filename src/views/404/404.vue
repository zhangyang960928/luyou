<template>
  <div class="box">
    <img src="../../assets/01b2c15bee3972a801209252698d55.png@1280w_1l_2o_100sh.png" alt="">
    <!-- <button @click='click'>返回</button> -->
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {
    click(){

    }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
    height: 50%;
    padding-top: 100px;
  }
}
</style>