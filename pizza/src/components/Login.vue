<template>
  <div class="container" id="Login">
      <div class="row">
          <img src="../assets/login.jpg" class="img-responsive center-block" alt="Responsive image">
      </div>
      <form>
            <div class="form-group">
                <label for="exampleInputEmail">邮箱</label>
                <input type="email" v-model="email" class="form-control" id="exampleInputEmail" placeholder="Email@">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">密码</label>
                <input type="password" v-model="Password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button type="submit" @click.prevent="LoginSubmit" class="btn btn-success form-control">登录</button>
        </form>
  </div>
</template>

<script>
    export default {
        name:'Login',
        data () {
            return {
                email:'',
                Password:''
            }
        },
        beforeRouteEnter: (to, from, next) => {
            next(vm => vm.$store.dispatch("setUser",null))
        },
        methods:{
            LoginSubmit (){
                this.$axios.get("https://wd8113938945vvvdza.wilddogio.com/users.json")
                .then( res => {
                   let users = [];
                   let data = res.data;
                    for(let key in data){
                        let user = data[key];
                        users.push(user);
                    }
                    //实现过滤
                    let result = users.filter( (user) => {
                        return (this.email === user.email && this.Password === user.Password && user.email != null)
                    })
                    //判断长度
                    if (result != null && result.length > 0 && this.email !== '' && this.Password !== ''){
                        this.$store.dispatch("setUser",result[0].email)
                        this.$router.replace({name:'HomeLink'})
                    }else{
                        alert("邮箱或密码错误")
                        this.$store.dispatch("setUser",null)
                    }
                })
            }
        }
    }
</script>





