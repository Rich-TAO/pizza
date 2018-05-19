<template>
  <div class="container" id="Home">
      <div class="row">
          <div class="col-sm-12 text-center">
              <div class="backcolor">
                  <h1>欢迎大家品尝Pizza</h1>
                  <h2>这里有你非常喜欢的pizza</h2>
                  <button @click.prevent="GoToMenu" class="btn btn-success">Let's go</button>
              </div>
          </div>
      </div>
      <div class="row">

      </div>
  </div>
</template>

<script>
    export default {
        name:'Home',
        data () {
            return {

            }
        },
        methods:{
            GoToMenu (){
                this.$router.replace({name:'MenuLink'})
            }
        }
    }
</script>

<style scoped>
#Home{
    background-image: url(../assets/timg.jpg);
    height: 90vh;
    padding: 10%;
}

h1,h2{
    margin: 6%;
}

.backcolor{
    background: #eee;
    opacity: .8;
    max-width: 70vw;
    margin: 0 auto;
    padding: 20px 0;
}
</style>



