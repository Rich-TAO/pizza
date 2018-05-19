<template>
  <div class="container" id="Header">
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Pizza点餐系统</a>
                </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li><router-link :to="{name:'HomeLink'}">主页</router-link></li>
                        <li><router-link :to="{name:'MenuLink'}">菜单</router-link></li>
                        <li><router-link :to="{name:'AdminLink'}">管理</router-link></li>
                        <li><router-link :to="{name:'AboutLink'}">关于我们</router-link></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><router-link class="nav-link" :to="{name:'LoginLink'}" v-show="!isLogin">登录</router-link></li>

                        <li class="fontcolor">
                            {{currentUser}}
                        </li>
                        <li><router-link class="fontcolor" :to="{name:'LoginLink'}" v-show="isLogin">[退出]</router-link></li>


                        <li><router-link class="nav-link" :to="{name:'RegisterLink'}" v-show="!isLogin">注册</router-link></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
  </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        computed:{
            currentUser(){
                return this.$store.getters.currentUser
            },
            isLogin(){
                return this.$store.getters.isLogin
            }
        }
    }
</script>

<style>
.fontcolor{
    color: #fff;
    line-height: 50px;
}
</style>