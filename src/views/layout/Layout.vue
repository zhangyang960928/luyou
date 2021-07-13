<template>
  <div>
    <div>
      header
    </div>
    <div class='box'>
      <router-view></router-view>
    </div>
    <div>
      footer
    </div>
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
  methods: {},
  mounted() {
    
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.box {
  margin: 20px 0;
}
</style>