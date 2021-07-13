<template>
  <div>
    用户名：<input type="text" v-model="username" /> 密码：<input
      type="password"
      v-model="password"
    />
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  components: {},
  methods: {
    login() {
      let flag = true;
      if (this.username === "" && this.password === "") {
        flag = false;
        alert("账户密码不能为空");
        return;
      }
      if (this.username === "") {
        flag = false;
        alert("账户不能为空");
      }
      if (this.password === "") {
        flag = false;
        alert("密码不能为空");
      }
      this.username=''
      this.password=''
      if (flag===true) {
        let user = {
          username: this.username,
          password: this.password,
        };
        localStorage.setItem("vue-user", JSON.stringify(user));
        this.$router.push("/");
      }
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>