<template>
  <div class="container" id="Menu">
      <div class="row">
          <div class="col-sm-12 col-md-8">
            <table class="table table-hover">
                <thead class="thead-default">
                    <tr>
                        <td>品种</td>
                        <td>尺寸</td>
                        <td>价格</td>
                        <td>加入</td>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item.name">
                    <tr v-for="option in item.options" :key="option.size">
                        <td><strong>{{item.name}}</strong></td>
                        <td>{{option.size}}</td>
                        <td>{{option.price}}</td>
                        <td><button @click.prevent="addTobasket(item,option)" class="btn btn-sm btn-outline-success">加入</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 购物车 -->
        <div class="col-sm-12 col-md-4">
            <div v-if="baskets.length > 0">
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <td>数量</td>
                            <td>品种</td>
                            <td>价格</td>
                        </tr>
                    </thead>
                    <tbody v-for="item in baskets" :key="item.name">
                        <tr>
                            <td>
                                <button @click.prevent="ducussQuantity(item)" class="btn btn-sm">-</button>
                                <span>{{item.quantity}}</span>
                                <button @click.prevent="addQuantity(item)" class="btn btn-sm">+</button>
                            </td>
                            <td>{{item.name}}</td>
                            <td>{{item.price * item.quantity}}</td>
                        </tr>
                    </tbody>
                </table>
                <p>总价：{{total + "RMB"}}</p>
                <button class="btn btn-block btn-success">结算</button>
            </div>
            <div v-else>
                <p>购物车没有任何商品</p>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name:'Menu',
        data () {
            return {
                baskets:[],
                // getMenuItems:{}
            }
        },
        methods:{
            addTobasket(item,option){
                let list = {
                    name:item.name,
                    size:item.size,
                    price:option.price,
                    quantity:1
                };
                if (this.baskets.length > 0){
                    //过滤
                    let result = this.baskets.filter( list => {
                        return list.name === item.name && list.price === option.price;
                    })
                    if(result != null && result.length > 0){
                        result[0].quantity ++;
                    }else{
                        this.baskets.push(list);
                    }
                }else{
                    this.baskets.push(list);
                }
            },
            ducussQuantity (item){
                if (item.quantity >1){
                    item.quantity --;
                    //删除数据
                }else{
                    this.baskets.splice(this.baskets.indexOf(item),1);
                }
            },
            addQuantity (item){
                item.quantity ++;
            } 
        },
        computed:{
            getMenuItems (){
                return this.$store.getters.getMenuItems
            },
            total (){
               let totalCost = 0;
               for(let index in this.baskets){
                   let individuaItem = this.baskets[index];
                   totalCost += individuaItem.quantity * individuaItem.price;
               }  
               return totalCost
            }
        },
        created (){
            this.$axios.get("https://wd8113938945vvvdza.wilddogio.com/menu.json")
            .then( res => {
                this.$store.commit("setMenuItems",res.data)
            })
        }
    }
</script>


