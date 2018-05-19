<template>
  <div class="container" id="About">
      <div class="row">
          <!-- 导航 -->
          <div class="col-md-4 col-sm-4">
              <div class="list-group">
                  <router-link class="nav-link" :to="{name:'HistoryLink'}">
                      <a class="list-group-item list-group-item-action">历史订单</a>
                  </router-link>
                  <router-link class="nav-link" :to="{name:'ContactLink'}">
                      <a class="list-group-item list-group-item-action">联系我们</a>
                  </router-link>
                  <router-link class="nav-link" :to="{name:'OrderingGuideLink'}">
                      <a class="list-group-item list-group-item-action">点餐文档</a>
                  </router-link>
                  <router-link class="nav-link" :to="{name:'DeliveryLink'}">
                      <a class="list-group-item list-group-item-action">快递信息</a>
                  </router-link>
              </div>
          </div>
          <!-- 导航对应的内容 -->
          <div class="col-md-8 col-sm-8">
              <router-view></router-view>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        name:'About',
        data () {
            return {

            }
        }
    }
</script>

