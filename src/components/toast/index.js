import Vue from "vue"
import ToastComponent from "./index.vue"

let initComponent = null;
let timer = null;

const merge = ($data, option) => {
    console.log($data)
    for (let prop in option) {
        if ($data.hasOwnProperty(prop)) {
            $data[prop] = option[prop]
        }
    }
}


let ToastContructor = Vue.extend(ToastComponent);

const Toast = (option = {}) => {
    console.log("传入的参数：", option)
    console.log(initComponent)
    if (initComponent) {
        initComponent.show = true;
        if (timer) {
            clearInterval(timer)
        }
        initComponent.$el.removeEventListener("transitionend", initComponent.destroyeInitComponent)
    } else {
        initComponent = new ToastContructor({
            el: document.createElement('div')
        })

        if (typeof option !== 'object') {
            console.log(option)
            initComponent.msg = option;
        } else {
            console.log(option)
            merge(initComponent.$data, option)
        }
        console.log(initComponent.$el)
        document.querySelector(option.container || 'body').appendChild(initComponent.$el);
    }
    Vue.nextTick(() => {
        initComponent.show = true;
        timer = setTimeout(() => {
            initComponent.close()
        }, option.duration || 2000)
    })
    return new Promise((resolve) => {
        resolve()
    })

}

ToastContructor.prototype.close = function () {
    this.show = false;
    this.$el.addEventListener("transitionend", this.destroyeInitComponent.bind(this))

}

ToastContructor.prototype.destroyeInitComponent = function () {
    initComponent = null;
    this.$destroy(true);
    this.$el.removeEventListener("transitionend", this.destroyeInitComponent);
    this.$el.parentNode.removeChild(this.$el)

}

export default Toast