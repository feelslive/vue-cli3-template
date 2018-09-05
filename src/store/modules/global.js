import * as types from "../type"
import Vue from 'vue'
import {
    Local
} from "../../localStorage/index";
const state = {
    bgColor: Local.get("bgColor") || "blue"
}
const getters = {
    bgColor: state => state.bgColor
}

const mutations = {
    [types.GLOBAL_BGCOLOR](state, color) {
        state.bgColor = color;
        Local.set("bgColor", color)
        console.log(state.bgColor);
        Vue.$toast({
            msg: state.bgColor,
            duration: 5000
        }).then(() => {
            console.log("回调")
        })
    }
}

const actions = {
    setbgColor({
        commit
    }, color) {
        commit(types.GLOBAL_BGCOLOR, color)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}