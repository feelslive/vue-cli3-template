<template>
    <transition name="fade">
        <div class="toast-wrap" v-show="show">
            <span>{{msg}}</span>
        </div>
    </transition>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      show: true
    };
  },
  methods: {}
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave {
  opacity: 0;
}
.toast-wrap {
  position: fixed;
  max-width: 80%;
  left: 50%;
  top: 50%;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  transform: translate3d(-50%, -50%, 0);
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
  font-size: 14px;
}
</style>

