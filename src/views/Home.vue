<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <button type="button" style="margin-top: 20px" @click="getLogin">获取登录状态</button><br/> -->
    <button type="button" style="background:#f60;margin-top: 20px;color:#fff;" @click="setTheme('orange')">设置主题f60</button><br/>
    <button type="button" style="background:#2577e3;margin-top: 20px;color:#fff;" @click="setTheme('blue')">设置主题f60</button><br/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import API from "../api/index";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  created() {
    let param = { page: 1 };
    API.login({
      params: param
    }).then(res => {
      console.log(res);
    });
  },
  methods: {
    // setTheme(color) {
    //   this.$store.dispatch("setbgColor", color);
    //   console.log(this.$store.getters.bgColor);
    // },
    ...mapActions({
      setTheme: "setbgColor"
    })
  }
};
</script>
