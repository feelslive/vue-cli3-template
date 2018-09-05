// 封装 localStrorage 和 cookie 等
const ls = window.localStorage;
export const Local = {
    get(key) {
        if (key) return JSON.parse(ls.getItem(key))
        return null
    },
    set(key, val) {
        const setting = arguments[0];
        if (Object.prototype.toString.call(setting).slice(8, -1) === "Object") {
            for (const i in setting) {
                ls.setItem(i, JSON.stringify(setting[i]))
            }
        } else {
            ls.setItem(key, JSON.stringify(val))
        }
    },
    remove(key) {
        ls.removeItem(key)
    },
    clear() {
        ls.clear()
    }
}