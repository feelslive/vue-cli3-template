<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
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
  }
};
</script>
