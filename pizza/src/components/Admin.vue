<template>
  <div class="container" id="Admin">
      <!-- 添加 -->
      <div class="row">
          <div class="col-sm-12 col-md-8">
              <new-pizza></new-pizza>
          </div>
          <div class="col-sm-12 col-md-4">
              <!-- 品种展示 -->
                <h3>菜单</h3>
                <table class="table">
                    <thead class="table-default">
                        <tr>
                            <th>品种</th>
                            <th>删除</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in getMenuItems" :key="item.name">
                        <tr>
                            <td>{{item.name}}</td>
                            <td>
                                <button @click.prevent="ducuss(item)" class="btn btn-outline-danger btn-sm">&times;</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
          </div>
      </div>
  </div>
</template>

<script>
    import newPizza from './NewPizza'
    export default {
        name:'Admin',
        components:{
            'newPizza':newPizza
        },
        data () {
            return {
                getMenuItems:[]
            }
        },
        created (){
            this.$axios.get("https://wd8113938945vvvdza.wilddogio.com/menu.json")
            .then( res => {
                let data = res.data;
                let menuArray = [];
                for(let key in data ){
                    //给每个对象添加一个id
                    data[key].id = key;
                    menuArray.push(data[key]);
                }
                this.getMenuItems = menuArray;
            })
        },
        methods:{
            ducuss (item){
                // this.getMenuItems.splice(this.getMenuItems.indexOf(item),1);
                this.$axios.delete("https://wd8113938945vvvdza.wilddogio.com/menu/" + item.id + ".json")
                .then( res => {
                    this.$router.replace({name:'MenuLink'})
                })
            }
        }
    }
</script>


