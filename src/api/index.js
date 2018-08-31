 import axios from './http'
 export default {
     login(param) {
         return axios.get("/liren/info/getproduct", param).then(
             res => {
                 return Promise.resolve(res);
             },
             err => {
                 return Promise.reject(err);
             }
         );
     }

 }