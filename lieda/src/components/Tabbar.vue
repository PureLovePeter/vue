<template>
  <div class="Tabbar">
      <div class="Tabbar-line"></div>
      <div class="Tabbar-bg">
          <div class="Tabbar-Item" v-for="item in items" @click="tabbarChange(item)">
              <div class="Tabbar-bgImage">
                  <img class="Tabbar-Image" :src="item.tabImage" alt="">
              </div>
              <p>{{item.tabTitle}}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"Tabbar",
  data() {
      return{
        items:[
                { tabTitle: '首页', tabImage: require('../assets/images/猎头.png') ,tabImageSelect: require('../assets/images/猎头选中.png') ,itemId:1},
                { tabTitle: '职位', tabImage: require('../assets/images/职位.png') ,tabImageSelect: require('../assets/images/猎头.png') ,itemId:2},
                { tabTitle: '消息', tabImage: require('../assets/images/消息.png') ,tabImageSelect: require('../assets/images/猎头.png') ,itemId:3},
                { tabTitle: '我的', tabImage: require('../assets/images/我的.png') ,tabImageSelect: require('../assets/images/猎头.png') ,itemId:4},
        ]
      }
  },
  methods:{
      tabbarChange:function(item){
          if(item.itemId == 1){
            this.$router.push({ path: '/' })
          }else if(item.itemId == 2){
            this.$router.push({ path: 'Positions' })
          }else if(item.itemId == 3){
            this.$router.push({ path: 'Message' })
          }else if(item.itemId == 4){
            this.$router.push({ path: 'Me' })
          }
      }
  }
}
</script>

<style scoped>
.Tabbar{
    width: 100%;
    height: 49px;
    background-color: white;
    position:absolute;
    bottom: 0;
}
.Tabbar-line{
    background-color: #e4e4e4;
    width: 100%;
    height: 0.5px;
    margin: 0px 0px;
}

.Tabbar-bg{
    background-color: white;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40px;
}

.Tabbar-Item{
    display: flex;
    flex-direction: column;
    width: 25%;
    text-align: center;
}
.Tabbar-bgImage{
    text-align: center;
    height: 25px;
}
.Tabbar-Image{
    margin-top: 5px;
    margin-bottom: 0px;
    width: 24px;
    height: 24px;
}
p{
    margin-top: 4px;
    height: 15px;
    color: #333333;
    font-size: 14px;
}
</style>
