import Vue from 'vue'
import Vuex from 'vuex'
//使用vuex
Vue.use(Vuex)

//导出vuex对象

export default new Vuex.Store({
    //设置属性
    state:{
        menuItems:{},
        currentUser:null,
        isLogin:false
    },
    //获取属性
    getters:{
        getMenuItems:state=>state.menuItems, 

        currentUser:state=>state.currentUser,
      
        isLogin:state=>state.isLogin
        
    },
    //改变属性
    mutations:{
        setMenuItems (state,data) {
            state.menuItems = data;
        },
        userStatus(state,user){
            if(user){
                state.currentUser = user
                state.isLogin = true
            }else{
                state.currentUser = null
                state.isLogin = false
            }
        }
    },
    //使用mutatios
    actions:{
        setUser({commit},user){
            commit("userStatus",user)
        }
    }
})
