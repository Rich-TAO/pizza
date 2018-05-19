<template>
  <div class="container" id="Register">
      <div class="row">
          <img src="../assets/register.jpg" class="img-responsive center-block" alt="Responsive image">
      </div>
      <form>
            <div class="form-group">
                <label for="exampleInputEmail1">邮箱</label>
                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" placeholder="Email@">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">密码</label>
                <input type="password" v-model="Password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword2">确认密码</label>
                <input type="password" v-model="confirmPassword" class="form-control" id="exampleInputPassword2" placeholder="Password">
            </div>
            <button type="submit" @click.prevent="RegisterSubmit" class="btn btn-success form-control">注册</button>
        </form>
  </div>
</template>

<script>
    export default {
        name:'Register',
        data () {
            return {
                email:'',
                Password:'',
                confirmPassword:''
            }
        },
        methods:{
            RegisterSubmit () {
                if (this.Password !== '' && this.email !==''){
                    if (this.Password == this.confirmPassword) {
                    let RegisterData = {
                        email:this.email,
                        Password:this.Password,
                        confirmPassword:this.confirmPassword
                    }
                    this.$axios.post("https://wd8113938945vvvdza.wilddogio.com/users.json",RegisterData)
                    .then(res => this.$router.replace({name:'LoginLink'}))
                    }else{
                        alert('两次密码不一致')
                    }
                }else{
                    alert('请填写账号和密码')
                }
            }
        }
    }
</script>


